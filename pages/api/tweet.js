import Tweet from '../../lib/tweet'

export default (req, res) => {
    Tweet.get('search/tweets', { from: "byr_mucahit", count: 10}, function(err, data, respone){
        
        if(err){
            return res.status(400).json({message: 'Ups! error has been occured'})
        }

        res.status(200).json(JSON.stringify(data))
    })


   
}