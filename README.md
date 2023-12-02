# PostGrid Letter Webhook

This applicaiton is used to notify when events occur in PostGrid related to letter creation and update.

## Steps

Update the `.env` file and add the Webhook secret

Run a server using ngrok

> ngrok http `PORT
`

Copy the Forwarding URL provided by ngrok and append the API endpoint used to receive the request for the letter notification

Example: `ngrok Forwarding URL`/v1/letter-notification

Paste the complete API endpoint in the Webhook settings of PostGrid Wehbook and save the changes

Process the letter and checkout the response in the console
