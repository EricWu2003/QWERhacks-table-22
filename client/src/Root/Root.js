import React from "react";
import 
{
  Box, Typography, TableContainer, Table,
  TableHead, TableRow, TableCell, TableBody, CircularProgress,
  Link,
} from '@mui/material';
import axios from "axios";
import Paper from '@mui/material/Paper';


export default function Root() {
  const [hospitals, setHospitals] = React.useState([]);
  const [isHospitalListLoading, setIsHospitalListLoading] = React.useState(true);
  console.log(hospitals);


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
    <Box m={2}>
      <Typography>
        Here's a list of hospitals that we keep track of (table built using MUI):
      </Typography>

      {/* refer to https://mui.com/material-ui/react-table/ */}
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Rating</TableCell>
            <TableCell align="right">Comment Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isHospitalListLoading && <CircularProgress />}
          {hospitals.map((row) => (
            <TableRow
              key={row.hospital_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link href={`/hospitals/${row.hospital_name}`}>
                  {row.hospital_name}
                </Link>
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