import React from "react";
import { Carousel } from "react-bootstrap";
// import './Spinner.css';
const images = [
  "https://as2.ftcdn.net/v2/jpg/00/63/73/15/1000_F_63731534_yotD0KXnVfBxIiZRJzyoEXy67KwJ4Mnt.jpg",
  "https://hpgeneralstudies.com/wp-content/uploads/2017/07/Gaddi-dance-form-Himachal-GK-MCQs-Lifestyle-Food-habits-and-Traditions-3-himachal-pradesh-generals-studies-hpgk-himachalgk-hpgeneralstudies.jpg",
  "https://as2.ftcdn.net/v2/jpg/04/91/71/73/1000_F_491717329_NyV4XrwlkegWdpSjV5Xni0OP2oguEnJ0.jpg",
  "https://as1.ftcdn.net/v2/jpg/03/40/58/02/1000_F_340580278_RTo3vXppsiITp3XSdIvNTENpBzDRWlAn.jpg",
  "https://as2.ftcdn.net/v2/jpg/04/70/76/19/1000_F_470761995_6ru1SxTV2KCienxwZ5H2U8gZrqJH0fiI.jpg",
  "https://images.unsplash.com/photo-1581791534721-e599df4417f7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGltYWNoYWwlMjBwcmFkZXNofGVufDB8fDB8fHww",
  // Add more image URLs as needed
];
const Home = () => {
  return (
    <>
      <Carousel interval={2000} pause={false}>
        {images.map((imageUrl, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={imageUrl}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="full-screen-video">
          <video
            autoPlay
            loop
            muted
            src="https://videos.pexels.com/video-files/5147746/5147746-sd_640_360_30fps.mp4"
          />
        </div>
      <br></br>
      {/* // images end ---------------------------------------------------------------------------------------------------- */}
      <div id="scoller">
        <div id="scoller-in">
          <h4>HIMACHAL-</h4>
          <h4>PRADESH-</h4>
          <h4>IS-</h4>
          <h4>BEAUTIFUL-</h4>
          <h4>STATE-</h4>
          <h4>THE-</h4>
          <h4>LAND-</h4>
          <h4>OF-</h4>
          <h4>GODS-</h4>
        </div>
        <div id="scoller-in">
          <h4>HIMACHAL-</h4>
          <h4>PRADESH-</h4>
          <h4>IS-</h4>
          <h4>BEAUTIFUL-</h4>
          <h4>STATE-</h4>
          <h4>THE-</h4>
          <h4>LAND-</h4>
          <h4>OF-</h4>
          <h4>GODS-</h4>
        </div>
      </div>
      {/* title end ---------------------------------------------------- */}

      <div id="cards-container">
        <div className="card45" id="card1">
          <div className="overlay">
            <h3>Himalayas</h3>
            <p>
              Mountain Ranges of Himalaya’s in Himachal Pradesh.<br></br>
              1:-Pir Panjal Range<br></br>
              2:-Few high peaks of Mountains of Pir Panjal range<br></br>
              3:-Dhaula Dhar Range<br></br>
              4:-Zanskar Range
            </p>
          </div>
        </div>
        <div className="card45" id="card2">
          <div className="overlay">
            <h3>Wild Life</h3>
            <p>
              there are over 1500 bird and 350 animal species in the state. This
              includes the leopards, the rare snow Leopards, Ghoral, Musk Deer
              and Monal. The state boasts of largest number of wildlife
              sanctuaries in Northern India.
            </p>
          </div>
        </div>
        <div className="card45" id="card3">
          <div className="overlay">
            <h3>Fair & Fest</h3>
            <p>
              The aesthetically built Lord Shiva stone temple at Baijnath is
              decorated with flowers where devotees throng to offer milk and
              worship the deity.<br></br>
              Nalwari Fair. ...<br></br>
              Holi Festival. ...<br></br>
              Navratri Fair. ...<br></br>
              Deotsidh Fair. ...<br></br>
            </p>
          </div>
        </div>
      </div>

      <div id="cards-container">
        <div className="card45" id="card4">
          <div className="overlay">
            <h3>Cuisine</h3>
            <p>
              {" "}
              1. Dhaam 2. Babru 3. Kullu Trout Fish 4. Siddu 5. Aktori 6. Bhey
              7. Chha Gosht 8. Kaale Channe Ka Khatta 9. Tibetan Thukpa 10.
              Mittha 11. Tudkiya Bhath 12. Chicken Anardana 13. Aloo Palda 14.
              Auriya Kaddu
            </p>
          </div>
        </div>
        <div className="card45" id="card5">
          <div className="overlay">
            <h3>Adventure</h3>
            <p>
              Trekking River ,Rafting Camping ,Rock Climbing ,Rappelling Angling
              Ice Skiing,Heli-Skiing ,Paragliding ,Zorbing Hiking ,Jeep Safari
              Mountain Biking ,Ice Skating
            </p>
          </div>
        </div>
        <div className="card45" id="card6">
          <div className="overlay">
            <h3>Culture</h3>
            <p>
              The North Indian state of Himachal Pradesh is a state that has
              remained largely uninfluenced by Western culture. Himachal Pradesh
              is a multi-religion practising, multicultural and multilingual
              state. Some of the most commonly spoken languages are Hindi and
              the various Pahari languages.
            </p>
          </div>
        </div>
      </div>
      {/* brautiful==================--------------------------    */}

      <div className="clearfix">
        <img
          src="https://2.bp.blogspot.com/-3Vx7bYmLXDA/UYOd7z7C-QI/AAAAAAAADgk/igLsjglJLz8/s1600/421605_260833303996288_227971870615765_558680_1929046181_n.jpg"
          className="col-md-6 float-md-end mb-3 ms-md-3"
          alt="..."
        />
        <h1>The Beautiful State </h1>
        <p>
          The state of Himachal Pradesh is home to numerous charming towns and
          hamlets. Tourists can unwind at a number of locations in this Indian
          state. Britishers who visited this hill station in the 19th century
          put Himachal Pradesh into recognition. The British designated Himachal
          as India's summer capital in 1864.
        </p>
        <p>
          Place For All Seasons |- Both in the summer and the winter, people may
          travel in and around Himachal Pradesh and take in its various
          attractions. In the summer, this location offers relief from the heat
          of the plains; in the winter, snow-covered topography delights
          everyone who comes to visit.
        </p>
        <p>
          Natural Beauty |- The Shivalik hills, thick forests, and narrow
          valleys make up Himachal's exterior border. Cedar and spruces are
          found in the spectacular Himalayan mid ranges, accompanied by alpine
          grass.
        </p>
        <p>
          Pilgrimages |- Himachal has also been a popular location for
          pilgrimages. Many tourists travel to Himachal Pradesh all year long to
          visit its holy sites. There are many different kinds of locations with
          historical value.
        </p>
      </div>

      {/* ----------======================================================= */}

      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5">Top Destination-</h1>
      </div>

      <div className="container">
        <div className="left-column">
          <div className="top-circles">
            <div className="circle">
              <img
                src="https://www.amastaysandtrails.com/content/dam/ama/Our-hotels/shimla/shimla.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg"
                alt="Circle 1"
              />
            </div>
            <div className="circle">
              <img
                src="https://yatralipi.com/wp-content/uploads/2022/04/Dharamshala-scaled-1.jpg"
                alt="Circle 2"
              />
            </div>
          </div>
          <div className="bottom-circles">
            <div className="circle">
              <img
                src="https://static.toiimg.com/photo/48145819.cms"
                alt="Circle 3"
              />
            </div>
            <div className="circle">
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-s/0e/bd/c3/e2/kullu-valley.jpg"
                alt="Circle 4"
              />
            </div>
          </div>
        </div>

        <div className="paragraph-box">
          <p>
            Tourism is the largest and fastest-growing industry across the
            world. It is a source of revenue and employment. It also gives the
            opportunity for people to understand the culture, civilization, and
            religious aspects of a country. There are many countries whose main
            source of revenue is Tourism. It is an export that is not visible
            which earns valuable foreign exchange without any substantial or
            actual loss of internal resources. Tourism is a unique type of
            highly labor-intensive industry. It provides different services that
            are needed as well as expected by the incoming tourists. Tourism is
            one of the largest industries in terms of money spent by tourists in
            the countries they visit. The amount received from the Tourism
            industries sometimes exceeds the Gross National Product of many
            countries.
          </p>
        </div>
      </div>
      {/* </div> */}

      <>
        <div className="waviy">
          {"   "}
          <span
            style={{
              "--i": "1",
            }}
          >
            P
          </span>
          {"   "}
          <span
            style={{
              "--i": "2",
            }}
          >
            A
          </span>
          {"   "}
          <span
            style={{
              "--i": "3",
            }}
          >
            H
          </span>
          {"   "}
          <span
            style={{
              "--i": "4",
            }}
          >
            A
          </span>
          {"   "}
          <span
            style={{
              "--i": "5",
            }}
          >
            R
          </span>
          {"   "}
          <span
            style={{
              "--i": "6",
            }}
          >
            I
          </span>
        </div>
        <div className="full-screen-video">
          <video
            autoPlay
            loop
            muted
            src="https://videos.pexels.com/video-files/8319945/8319945-sd_640_360_25fps.mp4"
          />
        </div>
        <div id="main">
          <div id="page1">
            <h1>One life. One world. Explore it.</h1>
            <h2>Himachal Pradesh is heaven on earth.</h2>
            <p>
              “Himachal Pradesh, where every mountain holds a story waiting to
              <br></br>
              be discovered.” “Himachal Pradesh is an ode to nature's<br></br>
              masterpiece.”
            </p>
          </div>
        </div>
      </>
    </>
  );
};

export default Home;
