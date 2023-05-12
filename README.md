# api documentation :

>> all get requests will be sent by using BEARER TOKEN returned by the POST REQUEST that registers a new user (line 26)

### to get full userinfo :
http://172.17.27.144:1337/api/user-infos

### to get full userinfo with full media details :
http://172.17.27.144:1337/api/user-infos?populate=*

### to get userinfo for particular username or platenumber :
http://172.17.27.144:1337/api/user-infos?filters[username][$eq]=<NAME>
http://172.17.27.144:1337/api/user-infos?filters[number_plate_code][$eq]=<CODE>

## register yourself as a new user :
method : **POST**

http://172.17.27.144:1337/api/auth/local/register

{
    "username" : "",
    "email" : "",
    "password" : ""
}

## to post data through api
method : **POST**

http://172.17.27.144:1337/api/user-infos

{
    "data": {
        "username": "dummy_person_3",
        "registration_date": "2021-05-10T23:55:00.000Z",
        "designation": "student",
        "blocked_status": false,
        "access_status": true,
        "access_from": "2023-01-10T00:30:00.000Z",
        "access_to": "2023-01-01T00:30:00.000Z",
        "vehicle_type": "four_wheeler_commercial",
        "number_plate_code": "jk-90-94990",
        "createdAt": "2023-05-12T07:06:42.036Z",
        "updatedAt": "2023-05-12T07:07:16.331Z",
        "publishedAt": "2023-05-12T07:07:16.327Z",
        "slug": "dummy_person_3"
    },
    "meta": {}
}
