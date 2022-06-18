import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

import styles from './index.module.css'

const Home: NextPage = () => {
  useEffect(() => {
    // const axios = new Axios()
    // axios
    //   .get(
    //     'https://2qbewbwhu2.execute-api.ap-northeast-1.amazonaws.com/prod/huntings',
    //   )
    //   .then((data) => {
    //     console.log(data)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })

    fetch(
      'https://2qbewbwhu2.execute-api.ap-northeast-1.amazonaws.com/prod/huntings',
      {
        // mode: 'no-cors',
      },
    )
      .then((response) => console.log(response))
      .then((data) => console.log(data))
  }, [])

  return (
    <div>
      <Head>
        <title>ジビエデイズAizu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* あやのはここから下 */}
      <div className={styles.mv}>
        <header>
          <div className={styles.header}>
            <div className={styles.logo}>
              <img src="logo.svg" alt="" />
              <p className={styles.tagline}>野生動物のオープンソース</p>
            </div>
            <div className={styles.header_btn}>
              <div className={styles.signin}>
                <a href="#">ログイン</a>
              </div>
              <div className={styles.signup}>
                <a href="#">会員登録</a>
              </div>
            </div>
          </div>
        </header>
        <div className={styles.mv_img}>
          <img src="mv.png" alt="" />
        </div>
      </div>
      <main>
        <section className={styles.animals_01}>
          <h1>今すぐ活かせる動物たち</h1>
          <div className={styles.box}>
            <div>
              <img src="wana_01.png" alt="" />
              <div>おり罠</div>
            </div>
            <div className={styles.state}>ワナにかかった！</div>
            <div>
              <div>
                <span>
                  <img src="pets_FILL0_wght400_GRAD0_opsz48.svg" alt="" />
                </span>
                <span>動物の種類：</span>
                <span>イノシシ</span>
              </div>
              <div>
                <span>仕掛け日時：</span>
                <span>2022年7月1日</span>
              </div>
              <div>
                <span>場所：</span>
                <span>会津町</span>
              </div>
              <div>
                <span>設置者</span>
                <span>会津 太郎</span>
              </div>
            </div>
            <div className="detail_btn">
              <a href="">詳細を確認する</a>
            </div>
          </div>
        </section>
      </main>
      {/* あやのはここから上 */}
    </div>
  )
}

export default Home
