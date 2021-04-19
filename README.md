# Eventz

An app where users can post meetup events where the users can 'like', 'join'. Users will make post events with an image of the location on google maps and a description of the event that users can join

## Installation Instructions
  1. Cd into desired directory and type "git clone "this repo url""
  2. Type "npm install" in the same directory
  3. Create a .env file under the server directory and paste the following code into it:
    // MongoDb
    URI=mongodb+srv://dbUserAdmin:dbUserPassword@cluster0.2lzcv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    // Google_application_credentials
    GOOGLE_APPLICATION_CREDENTIALS="./serviceAccount.json"
    DATABASE_NAME=eventz-website-default-rtdb
  4. Create a serviceAccount.json file under the server directory and paste the following code into it:
{
  "type": "service_account",
  "project_id": "eventz-website",
  "private_key_id": "bd3a8731ebef663b2dbc687afb741439347d974a",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCohgw3wkUXBHtj\nzfR5QG6Bc3tsB9rvGOimHoojMjyGSy+tG5+yOgnLODbTmaHrwgYNkcpyk5WTe/Di\ndg+H8Qu4uQSXw9/lyZcSXSWXFqAzZ827LP8Q7AohM8zuTaoZGQcbT9+CsS9J67zx\n9cFr+FgSP9VMCAQrwtTFR8BkDUTV1h8IVbhR+E3lvzYuiJAEuiJsZ7Jdh604Akf6\n3iwW+EcTBfSUbeW89Sf7RZb1VSBcG6s3quP3GhaM9GSp6LAozLYVr7yXhf1AFcp6\nfrtoX4uUAhYZk5oanUsTXIdvhgKHdP4QjuL0L1LwoqjEiZUwxVW8nW7hd3WmhGZN\nrcLvU0uNAgMBAAECggEABXBGBqqjVinT3ZWw9RTKPC1A52ydeSfhojLMHHSrlV3p\nzPlePv82f7NxuYR0wEoDrf5tfSMcKaVPUc+jkqyJx01ZQ5iTqjPGR1ZwNx8Izn/k\nGM1L8fzcGtQ0IeCpw6OWIiCCwxH6x7Tu5RQcSOK73OLofEqp78ua2D8Hi3MOLKRt\n9B0YOmIb67G8FSrlXLayc+z8vfhxxOyaIodVUzOaS+Gc1bSlZBIALBvxzJFKNWA5\nbLtgr+pqYibkai+80/19I0kPE1DrPZojWRun81X7RXrveBBbNZTiv7uEnBK3jJZz\nt+6VJ2IUnv1O0gB0+S0+mCUaXKPKVJInGL6B2c6QQQKBgQDWkMp/XFAIdo7suUvf\nFtWRVglyKlyTHlxMmmu+Ta9Xtgznz7iyDBRrD39BsNVyYd3815mxIdfCijS/Ferr\nvT9GfCS3LzOHe1X0W93Pir9h6MJPH1SHavCXW0qTHmTdJuJnBCQk3w5ThdcG5ICW\nYOKFrNUUP2c6dyDbtqr3LXAFfQKBgQDJESNUIsO154tWDtb0CGS6aGFRJo6/4XDW\nkJB266tHyPOjLs1G+Hx8waN8Dzr0tJcna7YBK8pXVMfPFdlVGJoCNO9R3AmGxav9\n6X3QBweUIOAKZaFTFk4hL4EmHSnoGBHEJmd2y0QZT7DnzIOcsVuEfEVywE4WGmPx\n2YKK14D7UQKBgHMVP/dlvOt9I5WmoSIr7irAudpJDFRAUYMoxCdTJXvnAi8Hg+nD\nfuQZcMj8Hs/13An0XdPa8g2+8SGYkOMWIy0cAtlZ8Mp3BZhF+ceKhLHwFOA5Tq4/\nVoHoDiywfar8Yyyb1QMNvHJh8/4Xazy9BGJsW/E7PJPoN3CBHlvrPA1FAoGAXGhr\n/DceC3QnLZ4UXIOfB60BTPKTmMxbt8EpI/6b8ZoBn3XbEksRq6SzJkk5p014Sr3O\nICuoCwsD6cD46Yss/OanNtAR8MbYjRHKqNkSOpoBXcXnpvARaF8U1BeDMxAc2jFs\nS8SPv7JIc8AinNlGXlVe9aY8PRxT4ss8m+L/fIECgYB79SmnZRnCu9HH+pXHVK24\neIk6+3if43KYMD7yBw0dwmifd2kuzEFULXpEX+Uv3eJkR78US1Ppt7Y37ZCEj1u+\nKxiMg6QeJdsb/InGvYeHPwWFRHK1DZbxz3daxVk6DcujTXEIM5dcK4cflhGy+3X5\nDLAY41yqtABqBEjve28cPg==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-psyxw@eventz-website.iam.gserviceaccount.com",
  "client_id": "113835143684057942408",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-psyxw%40eventz-website.iam.gserviceaccount.com"
}

  5. Save all and Cd into the Server Folder and type "npm start"



## Lo-fi Mockup

![Authentication page](https://i.imgur.com/oT4X6MO.png)
![Event list page](https://i.imgur.com/xZ7e8Ir.png)
![Event detail page](https://i.imgur.com/hQJroWj.png)
![Edit event page](https://i.imgur.com/vnIVGu1.png)

## Milestone 1

- [ ] Authentication (Login/Register/Logout) with Firebase
- [ ] Implement Event List Screen with static data
- [ ] UI with basic styling(only for testing):
  1. Login/Register Screen with Logout Button
  2. Events Screen with static data
  3. Event Detail Screen with static data

## Milestone 2

- [ ] Read/Create Post for event (postman)
- [ ] Replace static data with dynamic data
- [ ] Implement function UI to create and read post (storybook?)
- [ ] Implement Navigation & Layouts

- UI:
  - [ ] Style all pages

## Milestone 3

- [ ] Create Update/Delete function for events
- [ ] Implement functions (deleteButton, editPage)
- [ ] Create Join event functionality

## Milestone 4

- [ ] JWT Tokens
- [ ] Create Follow functionality

## Milestone 5

- [ ] Deploy front-end/back-end
