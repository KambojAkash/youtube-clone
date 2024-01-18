export const YT_LOGO_DESKTOP= "https://www.shutterstock.com/image-vector/youtube-vector-logo-icon-logotype-260nw-2322975681.jpgc:\Users\Aman\Downloads\youtube-logo-png-46020.png"
export const YT_LOGO_MOBILE="https://i.pinimg.com/736x/7d/dc/54/7ddc545046b212d9ecc8eef83569222b.jpg"
export const YT_KEY="AIzaSyASEY8f8yNagyHAmpg0PPPBJZclCcUi50o";
export const YT_URL="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&pageToken=CAoQAA&regionCode=IN&key="
// export const YT_URL="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="
export let YT_SEARCH_URL=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${YT_KEY}&q=`
export let AUTO_SUGG_API ="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
// export let YT_CHANNEL=`https://youtube.googleapis.com/youtube/v3/channelSections?part=snippet%2CcontentDetails&key=${YT_KEY}&channelId=`
export let YT_CHANNEL=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${YT_KEY}&id=`
export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5b0614f19emshb62976bd9595c86p1e22d4jsn8669921398ec',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};