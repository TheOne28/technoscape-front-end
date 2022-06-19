import axios from 'axios'

export async  function getAuthAll(username, password){
    const publicAccess = process.env.BRICK_PUBLIC_ACCESS_TOKEN

    const reqBody = {
        "institution_id" : 11,
        "username": username,
        "password" : password
    }
    const data = await axios.post("https://sandbox.onebrick.io/v1/auth", reqBody, {
        headers: {
            Authorization: publicAccess,
        }
    })

    const json = JSON.parse(data)

    if(json.status === 200){
        return{
            success: true,
            data: json.data
        }

    }else{
        return {
            success: false,
            data: ""
        }
    }
}

export async function getGopayAuth(data, otp){
    const publicAccess = process.env.BRICK_PUBLIC_ACCESS_TOKEN

    const reqBody = {
        username: data.username,
        uniqueId: data.uniqueId,
        sessionId: data.sessionId,
        otpToken: data.otpToken,
        otp: otp
    }
    
    const result = await axios.post("https://sandbox.onebrick.io/v1/auth/gopay", reqBody, {
        headers: {
            Authorization: publicAccess,
        }
    })

    const json = JSON.parse(result)

    if(json.status === 200){
        return{
            success: true,
            data: json.data
        }

    }else{
        return {
            success: false,
            data: ""
        }
    }
}

export async function getTransactionDetail(accessToken, from, to){
    const result = await axios.get("https://sandbox.onebrick.io/v1/transaction/list", {
        headers:{
            Authorization: accessToken
        },
        params: {
            from: from,
            to: to,
        }
    })

    const json = JSON.parse(result)

    if(json.status === 200){
        return{
            success: true,
            data: json.data
        }

    }else{
        return {
            success: false,
            data: ""
        }
    }
}