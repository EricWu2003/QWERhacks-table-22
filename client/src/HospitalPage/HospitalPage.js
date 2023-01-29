import {
  Typography, Box, CircularProgress, List, ListItem, TextField, Button
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function HospitalPage() {
  const { hospital } = useParams();

  const [hospitals, setHospitals] = React.useState([]);
  const [isHospitalListLoading, setIsHospitalListLoading] = React.useState(true);

  const [currentComment, setCurrentComment] = React.useState("");

  const handleSubmitComment = () => {
    

    const requestBody = {
      hospital_name: hospital,
      comment: currentComment,
    };


    axios.post('http://localhost:8000/hospitals/comments', requestBody)
    .then(function (response) {
      comments.push(currentComment);
      setCurrentComment("");
    })
    .catch(function (error) {
      alert("Sorry, error posting comment")
      console.log(error);
    });
  }

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

      <Box display="flex" flexDirection="row" alignItems="center">
        <TextField
          label="Leave a comment"
          variant="outlined"
          value={currentComment}
          onChange={e => setCurrentComment(e.target.value)}
          multiline
        />
        {currentComment !== "" && 
          <Box ml={1}>
            <Button variant="contained" onClick={handleSubmitComment}>
              Submit
            </Button>
          </Box>
        }
      </Box>


    </Box>
  );
}