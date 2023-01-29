import React from "react";
import 
{
  Box, Typography, TableContainer, Table,
  TableHead, TableRow, TableCell, TableBody, CircularProgress,
  Link,
  TextField,
} from '@mui/material';
import axios from "axios";
import Paper from '@mui/material/Paper';


export default function Root() {
  const [hospitals, setHospitals] = React.useState([]);
  const [isHospitalListLoading, setIsHospitalListLoading] = React.useState(true);
  const [searchString, setSearchString] = React.useState("");
  // console.log(hospitals);

  const filteredHospitals = hospitals.filter(h => {
    return h.hospital_name.toLowerCase().includes(searchString.toLowerCase()) ||
      h.hospital_location.toLowerCase().includes(searchString.toLowerCase());
  })


  React.useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('http://localhost:8000/hospitals')
        .then(response => {
          setHospitals(response.data);
          setIsHospitalListLoading(false);
        });

  // empty dependency array means this effect will only run once (when the component mounts)
  }, []);


  return (
    <Box my={2} mx={17}>
      <Typography>
        Here's a list of hospitals that we keep track of (table built using MUI):
      </Typography>

      <Box m={2}>
        <TextField 
          sx={{width:"500px"}}
          label="Search by name or location..."
          value={searchString}
          onChange={e => setSearchString(e.target.value)}
        />
      </Box>

      {/* refer to https://mui.com/material-ui/react-table/ */}
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Website</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Rating</TableCell>
            <TableCell align="right">Comment Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isHospitalListLoading && <CircularProgress />}
          {filteredHospitals.map((row) => (
            <TableRow
              key={row.hospital_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link href={`/hospitals/${row.hospital_name}`}>
                  {row.hospital_name}
                </Link>
              </TableCell>
              <TableCell component="th" scope="row">
                <Box maxWidth="200px">
                  <Typography overflow="hidden" textOverflow="ellipsis" noWrap>
                    <Link href={row.hospital_url}>
                      Home Page
                    </Link>
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="right">{row.hospital_location}</TableCell>
              <TableCell align="right">{row.hospital_rating}</TableCell>
              <TableCell align="right">{row.comments.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Box>
  
  );

}