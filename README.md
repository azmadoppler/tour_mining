# Tour_Mining
**Description** : using twitter API to generating the tour record
# TODO
Integration with VueCLI. Better connection overall
## Requirement
* Node.js 
* Google Map API
* Twitter API key
* Unzipped program OR Git
## How to insert API Key
In the first file for tags_mining.js will need Twitter API key. You will need to insert all of the key here 
```javascript
var T = new Twit({
  consumer_key: '',
  consumer_secret: '',
  access_token: '',
  access_token_secret: ''
});//insert your key in bracket
```
In the first file for tags_googleAPI.js will need Google API key. You will need to insert it here
```javascript
var googleMapsClient = require('@google/maps').createClient({
  key: ''//insert your key in bracket
});
```
## How to use the script
0. Download the file or Clone
1. You should run this command in Command Line to check your node installation -> node --version
2. mining_bot_multiple_param.js will search the twitter for all the keyword . You can change the search query item by changing variable called P (default = I'm at (空港 OR 新幹線)) -> run this by put this in command line "node mining_bot_multiple_param.js" 
3. output will be in the file in function writeToText. (right now as 23/8/2017 default name is "mining_bot_result_D10_M8.txt")
4. Next we would need to go through the user timeline, we will use the script called "user_bot_detailed.js" -> run with by put this in command line "node user_bot_detailed.js" 
5. user_bot_detailed.js will output each user with their own specific data in writeToText function (right now as 23/8/2017  default file name is  "z_user_bot_detail_D2_record.txt";)
6. Lastly using map_api_for_keyword.js to change the location from the text file into the real world location by running -> node map_api_for_keyword.js
8. output will be in the file named Keyword_Mapped_v4.txt
