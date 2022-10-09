import "./Race.css";
import { gapi } from "gapi-script";
import { useEffect } from "react";

const Race = () => {
  var GoogleAuth; // Google Auth object.
  // function initClient() {
  // gapi.client.init({
  //     'apiKey': 'YOUR_API_KEY',
  //     'clientId': 'YOUR_CLIENT_ID',
  //     'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
  //     'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
  // }).then(function () {
  //     GoogleAuth = gapi.auth2.getAuthInstance();

  //     // Listen for sign-in state changes.
  //     GoogleAuth.isSignedIn.listen(updateSigninStatus);
  // });
  function authenticate() {
    return gapi.auth2
      .getAuthInstance()
      .signIn({ scope: "https://www.googleapis.com/auth/youtube.force-ssl" })
      .then(
        function () {
          console.log("Sign-in successful");
        },
        function (err) {
          console.error("Error signing in", err);
        }
      );
  }
  function loadClient() {
    gapi.client.setApiKey(process.env.REACT_APP_API_KEY);
    return gapi.client
      .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
      .then(
        function () {
          console.log("GAPI client loaded for API");
        },
        function (err) {
          console.error("Error loading GAPI client for API", err);
        }
      );
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.commentThreads
      .insert({
        part: ["snippet"],
        resource: {
          snippet: {
            channelId: "UCxJ_3wMkiiq_Lq7jiDyRQFA",
            topLevelComment: {
              snippet: {
                textOriginal: "Legend!!!!",
              },
            },
            videoId: "A6ehsMf87U8",
          },
        },
      })
      .then(
        function (response) {
          // Handle the results here (response.result has the parsed body).
          console.log("Response", response);
        },
        function (err) {
          console.error("Execute error", err);
        }
      );
  }
  useEffect(() => {
    gapi.load("client:auth2", function () {
      gapi.auth2.init({
        client_id: process.env.REACT_APP_CLIENT_ID,
        plugin_name: "piggie",
      });
    });
  }, []);

  return (
    <>
      <button
        onClick={() => {
          authenticate().then(loadClient);
        }}
      >
        Authenticate and load
      </button>
      <button
        onClick={() => {
          execute();
        }}
      >
        execute
      </button>
      <iframe
        title="zero"
        height={300}
        width={500}
        allowFullScreen
        src="https://www.youtube.com/embed/cWDJoK8zw58"
      ></iframe>
    </>
  );
};

export default Race;
