import Twit from 'twit'

const config = {
    consumer_key: '',
    consumer_secret: '',
    access_token: '',
    access_token_secret: ''
  }

const T = new Twit(config)

export default T