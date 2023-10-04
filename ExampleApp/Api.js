
export const getApiWithToken = async(token)=>{
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    return fetch("https://dev-unipanel-api.azurewebsites.net/api/dummyuser/getStudyType", requestOptions)
    .then(response => response.json())
    .then(result => {return result})
    .catch(error => {return error});
  };
export const postApi = async(email, password) => {
    console.log("🚀 ~ file: Api.js:41 ~ postApi ~ body:", email, password)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "panelGuid": "75a22a9e-d0e4-4547-af6b-6156bb0760eb",
    "email": email,
    "password": password
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    return  fetch("https://dev-unipanel-api.azurewebsites.net/api/user/loginPanelist", requestOptions)
    .then(response => response.json())
    .then(result => {return result})
    .catch(error => {return error});
};


