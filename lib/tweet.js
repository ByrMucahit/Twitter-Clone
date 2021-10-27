import Twit from 'twit'

const config = {
    consumer_key: 'KW8qosw2SzG3SjXcc4MfMzVwE',
    consumer_secret: 'B1BLaqRd6UDO8eE2PUmdR3TnULKBR7Em6lUSYqPHd0u44x21GQ',
    access_token: '1140998555479552003-XdRZcZkx0jAiUqu3AaCHwEiHljXTci',
    access_token_secret: 'x9ilTLXDfFNGaLO3b2Mo6flatvRC1uXOmpnfpViWesdKf'
  }

const T = new Twit(config)

export default T