function useViewFormater(viewCount) {
    const num = parseInt(viewCount, 10);
  
    if (isNaN(num)) {
      
      return 'Invalid view count';
    }
  
    if (num < 1000) {
      return num.toString(); 
    } else if (num < 1000000) {
      return (num / 1000).toFixed(1) + 'k'; 
    } else {
      return (num / 1000000).toFixed(1) + 'm'; 
    }
  }
  export default useViewFormater;