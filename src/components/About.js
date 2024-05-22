import React, { useState, useEffect } from "react";
import styled from "styled-components";
const StyledDiv = styled.div`
  padding: 20px;
  background-color: ${({ isHighlighted }) =>
    isHighlighted ? "lightblue" : "white"};
  transition: background-color 4s;
`;
const About = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    // Mimic an asynchronous operation, e.g., fetching data from an API
    const fetchData = async () => {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Update state after the delay
      setIsHighlighted(true);
    };

    // Call the fetchData function
    fetchData();
  }, []);
  return (
    <>
      <div className="image-container">
        <img
          src="https://himachaltourism.gov.in/wp-content/uploads/2018/03/slider1-min.png"
          alt="Your Image"
        />
        <div className="overlay-text">About-Us</div>
      </div>
      {/* image--------------------------------=================== */}
      <div id="scoller">
        <div id="scoller-in">
          <h4>.</h4>
          <h4>.</h4>
          <h4>.</h4>
          <h4>.</h4>
          <h4>.</h4>
          <h4>THE</h4>
          <h4>-</h4>
          <h4>LAND</h4>
          <h4>-</h4>
          <h4>OF</h4>
          <h4>-</h4>
          <h4>GODS</h4>
        </div>
        <div id="scoller-in">
          <h4>.</h4>
          <h4>.</h4>
          <h4>.</h4>
          <h4>.</h4>
          <h4>.</h4>
          <h4>THE</h4>
          <h4>-</h4>
          <h4>LAND</h4>
          <h4>-</h4>
          <h4>OF</h4>
          <h4>-</h4>
          <h4>GODS</h4>
        </div>
      </div>

      <div className="centered-paragraphs">
        <p>
          {" "}
          <StyledDiv isHighlighted={isHighlighted}>
            Until the British reign, tourism in Himachal Pradesh was very
            limited to a few places around the hills and some spiritual
            destinations. The British developed hill stations during their reign
            one of them being Shimla which they called The Summer Capital of
            India.
          </StyledDiv>
        </p>
        <p>
          <StyledDiv isHighlighted={isHighlighted}>
            Fairs and festivals There are a variety of festivals celebrated by
            the locals of Himachal Pradesh who worship gods and goddesses. There
            are over 2000 villages in Himachal Pradesh which celebrate festivals
            such as Kullu Dussehra, Chamba’s Minjar, Renuka ji Fair, Lohri,
            Halda, Phagli, Lossar and Mandi Shivratri.[2] There approximately
            6000 temples in Himachal Pradesh with a known one being Bijli
            Mahadev. The temple is seen as a 20-meter structure built in stone
            which, according to locals, is known to attract lighting. They say
            that this is a way the Gods show their blessings.
          </StyledDiv>
        </p>
        <p> <StyledDiv isHighlighted={isHighlighted}>
          Flora and fauna Sunrise at TaniJubbar Lake The Great Himalayan
          National Park is found in the Kullu districts of Himachal Pradesh.[2]
          It has an area of 620 sq km and ranging from an altitude of 1500
          meters to 4500 meters and was created in 1984. There are various
          forest types found here such as Deodar, Silver Fir, Spruce, Oak and
          Alpine pastures.[5] In the Great Himalayan National Park, there are a
          variety of animals found such as Snow Leopard, Himalayan Yak,
          Himalayan Black Bear, Western Tragopan, Monal and Musk Deer. This
          National Park is a trail to many hikers and trekkers too.[2] Moreover,
          there are sanctuaries which are tourist spots such as Naina Devi
          Sanctuary in Bilaspur district with an area of 120 sq km and Gobind
          Sagar Sanctuary with an area of 100 sq km. There are animals such as
          Indian porcupine and giant flying squirrel found here. The Gobind
          Sagar Lake has fish species such as Mrigal, Silver carp, Katla,
          Mahaseer and Rohu are found here.[5] Narkanda located in at an
          altitude of around 8850 feet is known for its apple orchards. It is
          located between the river valleys of Giri and Sutlej          </StyledDiv>

        </p>
        <p><StyledDiv isHighlighted={isHighlighted}>
          Shimla, the state capital, is popular among tourists. The Kalka-Shimla
          Railway is a mountain railway which is a UNESCO World Heritage
          Site.[3] Shimla is also a famous skiing attraction in India. Other
          popular hill stations include Manali, Kinnuar, Kasol, Parvati Valley,
          Chamba, Kullu, Kinnar Kailesh, and Kasauli. Dharamshala, home of the
          Dalai Lama, is known for its Tibetan monasteries and Buddhist temples.
          Many trekking expeditions also begin here. The Ridge is a large road
          in Shimla which is the centre of most cultural activities of Shimla.
          Annadale is also a major tourist spot in Shimla with an Army Heritage
          Museum, a Golf Course, helipad and lush green nature. Bir, located on
          the west of Joginder Nagar Valley, Kangara District, is the
          Paragliding Capital of India,[4] attracts numerous tourists for this
          aerial adventure sport. As well as being known as the “Paragliding
          Capital of India,” Bir in Himachal Pradesh is also a well-known
          destination for ecotourism and a hub for spiritual studies and
          meditation. With its Tibetan refugee camp, Buddhist monasteries, and
          large stupa, Bir is renowned for its peaceful atmosphere.’ ‘Bir
          Billing’ is the collective name for paragliders who take off from
          Billing and land in Bir village.  </StyledDiv>
        </p>
        {/* Add more paragraphs as needed */}
      </div>
    </>
  );
};

export default About;
