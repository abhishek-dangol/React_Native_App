import { Client, Account, ID } from 'react-native-appwrite';


export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.aora.koko",
    projectId: "6664701c000f4d584f5a",
    databaseId: "666471d4003bf4de895d",
    userCollectionId: "666471fa00102c10fa1f",
    videoCollectionId: "66647221001d1d634ad0",
    storageId: "66647376001e2db5007b"

}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);

export const createUser = () => {
account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});

}

