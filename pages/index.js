import React from 'react'


import Layout from '../components/layout'
import Tweet from '../components/tweet'


function HomePage() {
    return (
        <Layout>
            <Tweet 
            name="Mucahit BAYAR" 
            slug='Mucahit BAYAR' 
            datetime={new Date("2021-10-20")}
            text= {`postcss özelinde video çektim ama içinde yok yok :)) 
                
babel, ast, sass, ...`
            }
            />
             <Tweet 
            name="Mucahit BAYAR" 
            slug='Mucahit BAYAR' 
            datetime={new Date("2021-10-20")}
            text= {`KPSS'de 88 puan alan bir kişinin sözlü mülakatta "sıfır" puan alması hayatın olağan akışına aykırıdır. 

            Danıştay 12. Daire
            2020/1928 E.  2020/3137 K.`
            }
            />
               
        </Layout>
    )
  }
  
  export default HomePage