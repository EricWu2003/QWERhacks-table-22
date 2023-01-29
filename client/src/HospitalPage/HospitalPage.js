import { Typography, Box, CircularProgress, List, ListItem } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function HospitalPage() {
  const { hospital } = useParams();

  const [hospitals, setHospitals] = React.useState([]);
  const [isHospitalListLoading, setIsHospitalListLoading] = React.useState(true);

  React.useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('http://localhost:8000/hospitals')
        .then(response => {
          setHospitals(response.data);
          setIsHospitalListLoading(false);
        });

  // empty dependency array means this effect will only run once (when the component mounts)
  }, []);

  const matchingHospitals = hospitals.filter(h => h.hospital_name === hospital);
  console.log(matchingHospitals);

  if (!isHospitalListLoading && matchingHospitals.length === 0) {
    alert(`No hospital called ${hospital} found`)
  }
  
  const comments = (matchingHospitals.length > 0) ? matchingHospitals[0].comments : [];

  return (
    <Box m={2}>
      <Typography variant="h4">
        {hospital}
      </Typography>
      <Typography>
        Comments:
      </Typography>
      {isHospitalListLoading && <CircularProgress />}

      <List>
        {comments.map(comment => {
          return (
            <ListItem>
              {comment}
            </ListItem>
          );
        })}
        {!isHospitalListLoading && comments.length === 0 && <ListItem>No comments yet!</ListItem>}
      </List>

    </Box>
  );
}