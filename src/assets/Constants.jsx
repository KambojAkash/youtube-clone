export const YT_LOGO_DESKTOP= "https://www.shutterstock.com/image-vector/youtube-vector-logo-icon-logotype-260nw-2322975681.jpgc:\Users\Aman\Downloads\youtube-logo-png-46020.png"
export const YT_LOGO_MOBILE="https://i.pinimg.com/736x/7d/dc/54/7ddc545046b212d9ecc8eef83569222b.jpg"
export const YT_KEY="AIzaSyAQUkQiy1z5esrE8v6PVBMvg3CGb4wR1I8";
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
export const comments = [
	{ user: 'AlexJohnson', text: 'Great video! Really enjoyed it.' },
	{ user: 'EmilySmith', text: 'Awesome content, keep it up!' },
	{ user: 'DanielBrown', text: 'This is so informative. Thanks!' },
	{ user: 'SophiaLee', text: 'The recipe looks delicious.' },
	{ user: 'JacksonDavis', text: 'Beautiful scenery in the video!' },
	{ user: 'OliviaMartin', text: 'Loved the background music.' },
	{ user: 'HenryClark', text: 'Great workout routine. Going to try it!' },
	{ user: 'AvaAnderson', text: 'Nice tutorial. Helped me a lot.' },
	{ user: 'WilliamHarris', text: 'The editing is top-notch.' },
	{ user: 'AmeliaWilson', text: 'Fantastic video quality!' },
	{ user: 'MichaelMiller', text: 'Interesting topic. Learned something new.' },
	{ user: 'EmmaMoore', text: 'Your channel is my favorite!' },
	{ user: 'JamesSmith', text: 'Can\'t wait for the next video.' },
	{ user: 'EllaJohnson', text: 'Your explanations are clear and concise.' },
	{ user: 'LiamDavis', text: 'The humor in your videos is great!' },
	{ user: 'GraceTaylor', text: 'Thanks for sharing your knowledge.' },
	{ user: 'BenjaminBrown', text: 'I always look forward to your uploads.' },
	{ user: 'ChloeWilson', text: 'Subscribed to your channel!' },
	{ user: 'LucasAnderson', text: 'Impressive content. Keep it coming!' },
	{ user: 'AveryHill', text: 'Your videos are a valuable resource.' },
	{ user: 'MiaJones', text: 'I appreciate the effort you put into your content.' },
	{ user: 'JacksonWilliams', text: 'Well done on reaching 30k subscribers!' },
	{ user: 'ScarlettDavis', text: 'Your video thumbnails are eye-catching.' },
	{ user: 'HenryClarkson', text: 'Helpful tips. Thanks for sharing.' },
	{ user: 'ZoeMiller', text: 'Your passion for the subject shines through.' },
	{ user: 'LeoHill', text: 'Incredible editing skills!' },
	{ user: 'AriaThomas', text: 'The variety of content on your channel is great.' },
	{ user: 'NathanTaylor', text: "I've learned a lot from your tutorials."},
	{ user: 'HannahSmith', text: 'Your channel deserves more recognition.' },
	{ user: 'EthanMoore', text: 'Looking forward to your future projects.' },
  ];