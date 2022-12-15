import React from "react";
import axios from "axios";


const AirtableApi = async () => {
    // const data = {
    //     "records": [
    //         {
    //             "fields": {
    //                 "Color":"",
    //             }
    //         }
    //     ]
    // }

    const result = await axios.get('https://api.airtable.com/v0/app5DqNUOa5NIV4Qu/Table', {headers:{
        'Authorization': 'Bearer keyiTcpHxso54mCdn'
    }})

    return result;

}

export default AirtableApi;