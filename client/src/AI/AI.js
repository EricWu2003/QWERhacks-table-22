import {
  Typography, Box, TextField, Button, CircularProgress,
} from "@mui/material";
import React from "react";
import axios from "axios";






const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);








export default function AI() {

  const [currentQuery, setCurrentQuery] = React.useState("");
  const [currentResponse, setCurrentResponse] = React.useState("asdsasdfadsf");
  const [isLoading, setIsLoading] = React.useState(false);


  const handleSubmit = () => {

    // fetch('https://api.openai.com/v1/engines/text-davinci-002/jobs', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer API_KEY'
    //   },
    //   body: JSON.stringify({
    //     prompt: "What's the weather today?",
    //     temperature: 0.7
    //   })
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data.choices[0].text)
    //   });

    // const reqBody = {
    //   prompt:currentQuery
    // }

    // const reqBody = {
    //   prompt: "What's the weather today?",
    //   temperature: 0.7,
    // }

    // const reqHeaders = {
    //   'Content-Type': 'application/json',
    //   'Authorization': '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'
    // }

    // axios.post('https://api.openai.com/v1/engines/text-davinci-002/jobs', reqBody, {
    //   headers: reqHeaders
    // })
    // .then((response) => {
    //   console.log("success");
    // })
    // .catch((error) => {
    //   console.log(error)
    //   alert("Chat GPT Error");
    // })

    const response = openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Say this is a test",
      temperature: 0,
      max_tokens: 7,
    }).then((response) => {
      console.log("success");
      console.log(response);
    })
    .catch((error) => {
      console.log(error)
      alert("Chat GPT Error");
    })


    setIsLoading(true);
    console.log("submitting")
  }
  
  return (
    <Box m={2}>
      <Typography variant="h4">
        Chat GPT Page
      </Typography>

      <Box display="flex" flexDirection="row" alignItems="center" m={1}>
        <TextField 
          label="Ask Chat GPT a question"
          variant="outlined"
          value={currentQuery}
          onChange={e => setCurrentQuery(e.target.value)}
          multiline
        />

        {currentQuery !== "" && 
          <Box ml={1}>
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        }
      </Box>

      {isLoading && <CircularProgress />}

      {!isLoading &&
        <Typography>
          {currentResponse}
        </Typography>
      }
      

    </Box>
  );
}