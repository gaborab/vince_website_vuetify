import axios from 'axios'

export async function getCoverUrl(){

}

// const urlPrefix="https://drive.google.com/uc?export=view&id="

// export const introimg= urlPrefix+"13huSxP8nrwqSr7OWApYg1_qYDJQjYZw6"
// export const aboutmeimage = urlPrefix+"12E1AV3FRPXcAunt9haPbQVN7AfRHsO0S"
// export const collage1 = urlPrefix+"1OCAngfmWQyu8nqBfC3alrLRga_rnJYiD"
// export const collage2 = urlPrefix+"1huvzkx7NcHKig2irR_3ai_I-TIi-44Jd"
// export const collage3 = urlPrefix+"1wY5W61RUrfnlX20lylusmvPl5YkbxzWN"
// export const collage4 = urlPrefix+"1OZiwzM1jYYbElhWEjTMT52lhW4PxkNQz"


// export const constDriveImages = {
//     "introimg" : urlPrefix+"13huSxP8nrwqSr7OWApYg1_qYDJQjYZw6",
//     "aboutmeimage" : urlPrefix+"12E1AV3FRPXcAunt9haPbQVN7AfRHsO0S",
//     "collage1" : urlPrefix+"1OCAngfmWQyu8nqBfC3alrLRga_rnJYiD",
//     "collage2" : urlPrefix+"1huvzkx7NcHKig2irR_3ai_I-TIi-44Jd",
//     "collage3" : urlPrefix+"1wY5W61RUrfnlX20lylusmvPl5YkbxzWN",
//     "collage4" : urlPrefix+"1OZiwzM1jYYbElhWEjTMT52lhW4PxkNQz",
// }

const address=""; // address removed

export async function getGalleryTopicData(folderName){
    let imageUrls=[];
    await axios.get(`${address}/getFolderData/${folderName}`).then(res => imageUrls=res.data).catch(error=>console.log(error));
    return imageUrls;
}

export async function getSubfolders(folderName, getCoverImg) {
    let subfoldersData=[]
    await axios.get(`${address}/getSubfolders/${folderName}/${getCoverImg}`).then(res => {
        res.data.forEach(subfolder => {
            //console.log(subfolder.cover.data)
            //let buf=new Buffer.from(subfolder.cover.data, 'binary');
            //'cover': getCoverImg ? buf.toString("base64") : null,
            subfoldersData.push({
                'coverUrl' : getCoverImg ? subfolder.cover : null,
                'name' : subfolder.folder.name
            });
        });
    }).catch(error=>console.log(error));
    return subfoldersData;
}

export async function sendMessage(senderName, senderMail, message) {
    axios.request({
        method: 'POST',
        url: `${address}/sendEmail`,
        headers: {
            'content-type': 'application/json'
        },
        data: {
            'name': senderName,
            'email': senderMail,
            'text': message
        }
    }).then().catch((err)=> {
        console.log("api call unsucessful",err);
      })

    // await axios.post(`${address}/sendEmail`, {
    //     'name': senderName,
    //     'email': senderMail,
    //     'text': message
    // }, {
    //     'headers': {
    //         'content-type': 'application/json'
    //     }
    // }).then({}).catch(error=>console.log(error));
}

// async function getSubEventData(){

// }