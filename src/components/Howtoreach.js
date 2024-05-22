import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
const StyledDiv = styled.div`
  padding: 20px;
  background-color: ${({ isHighlighted }) =>
    isHighlighted ? "lightblue" : "white"};
  transition: background-color 9s;
`;
const Styled = styled.div`
  padding: 20px;
  background-color: ${({ isHigh }) =>
    isHigh ? "lightgreen" : "white"};
  transition: background-color 4s;
`;
const images = [
  'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/10/acj-1710-airports-in-india-og.jpg',
  'https://www.hrtchp.com/web-content/images/1.jpg',
  'https://content.jdmagicbox.com/comp/manali/x6/9999p1901.1901.160909092752.e6x6/catalogue/gulliver-adventures-mall-road-manali-bike-on-rent-4s91kfdm6g.jpg'
  // Add more image URLs as needed
];
const Howtoreach = () => {
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
  const [isHigh, setIsHigh] = useState(false);

  useEffect(() => {
    // Mimic an asynchronous operation, e.g., fetching data from an API
    const fetchData = async () => {
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Update state after the delay
      setIsHigh(true);
    };

    // Call the fetchData function
    fetchData();
  }, []);
  return (
    <>
     <Carousel interval={1500} pause={false}>
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
      <div className="holo">
        <h1><Styled isHigh={isHigh}>How To Reach Himachal Pradesh By Air</Styled></h1>
        <p><StyledDiv isHighlighted={isHighlighted}>
          How To Reach Himachal Pradesh By Air The fastest way to travel to
          Himachal Pradesh is by air. But it is also the costliest when compared
          to price per unit of distance covered. However, if you are short on
          time and wish to splurge, you can take a flight to Shimla or Kullu if
          you are heading to Manali, and Kangra or Pathankot if you are heading
          to Dharamsala. The flights are largely limited to Delhi, so you will
          need to first arrive at Delhi to explore more flight options. The
          airport in Shimla, Jubbal Hatti, is around 40 km away from main Shimla
          City. You can get pre-paid taxis right outside the terminal. Go to the
          booking counter and state your destination to get a sense of the fare
          before you hop in. Travel only with registered taxis to avoid getting
          taken for a ride. The other two airports, Kullu-Manali Airport in
          Bhuntar and Dharamsala Airport (or Kangra Airport), are also
          well-connected to the city centre and you can get a cab without any
          hassle. Do note that if you are traveling in winter, flights could be
          cancelled at the last minute due to harsh weather conditions.</StyledDiv>
        </p>
      </div>
      <div className="holo">
        <h1><Styled isHigh={isHigh}>How To Reach Himachal Pradesh By Road </Styled></h1>
        <p><StyledDiv isHighlighted={isHighlighted}>
          A cheaper and more scenic alternative to taking a flight is to travel
          by road. Himachal has beautiful roads that are connected to major
          cities in India. There are 8 national highways and 19 state highways
          that offer superb connectivity to and within Himachal. When you are
          traveling by road, you can reach the most remote regions of the state.
          You can drive to Himachal yourself or rent a cab from Delhi. There are
          several state-owned and private luxury bus operators which will drop
          you to most large cities here. If you are driving yourself, it is
          advisable to travel by day, as Himachal roads can prove challenging in
          some points even to the most experienced driver. As with the flight,
          some roads can also be closed during the monsoon or winter die to
          landslides or excessive snowfall. Plan your vacation time keeping that
          in mind.</StyledDiv>
        </p>
      </div>
      <div className="holo">
        <h1><Styled isHigh={isHigh}>How To Reach Himachal Pradesh By Train</Styled></h1>
        <p><StyledDiv isHighlighted={isHighlighted}>
          Himachal Pradesh has a difficult terrain and because of that the
          Indian Railway hasn’t made much progress there. There are, however, a
          few options for those looking to enjoy a unique experience. A
          narrow-gauge track connects Pathankot (in Punjab) to Kangra, and Kalka
          (in Haryana) to Shimla. The train journey will take you through rural
          Himalayan ranges, giving you a first-hand glimpse into the hilly
          hinterlands of India. Untouched and pristine, this is a train ride
          worth taking. This journey will take you about eight hours. Hop aboard
          the Kalka-Shimla Toy Train that is also a UNESCO world heritage site.
          This is a 60-mile journey that crosses 864 bridges, 102 tunnels, and
          900 curves. You will stay glued to the window all through the journey,
          watching as massive mountains, verdant valleys, forests of oak and
          pine, and rippling meadows pass you by. The journey of six hours will
          feel like it ended too soon. There are other trains on the
          Kalka-Shimla route as well, such as Shivalik Deluxe Express, Rail
          Motor Car, Shimla Express, Shimla Kalka Passenger and Himalayan Queen.
          Two special heritage carriages - Shivalik Queen Tourist Coach and
          Shivalik Palace Tourist Coach - are available between March and
          September. To manage high tourist volumes in the months from April to
          June, two special holiday trains run on this route. Do book your
          tickets well in advance if you are traveling during the holiday
          season. You can do so online on the Indian Railway official website or
          at any Indian Railway booking counter.</StyledDiv>
        </p>
      </div>
      <div className="holo">
        <h1><Styled isHigh={isHigh}> Commutation Within Himachal Pradesh</Styled></h1>
        <p><StyledDiv isHighlighted={isHighlighted}>
          Commutation Within Himachal Pradesh Most visitors to Himachal Pradesh
          make a beeline for Shimla or Dharamsala, and why not; Shimla is a
          gorgeous city, though a bit crowded and urban, especially during
          holidays. And Dharamsala is a place of solitude and peace. However,
          should you decide to head off the beaten path, there is a lot more
          that you can enjoy in Himachal. Have you considered destinations like
          Solan, Kandaghat, Tara Devi, Summer Hill or Dharampur, among several
          others? If you are worried about stepping off the usual route, don’t
          worry. The state of Himachal has an excellent transportation network
          and you will be able to make your way to any corner that you desire.
          Whether you’ve arrived by flight, road or train, you can take off on
          your onward journey with ease. There are pre-paid taxi counters where
          you can hire a cab to take you where you wish to go next, or head to
          the city centre. There are numerous ways to travel within Himachal
          depending on your time and budget. There is, of course, local
          transport such as buses, auto rickshaws and shared taxis. Or if you
          prefer, you can hire a cab or a bike even. The well-laid road system
          makes it quite comfortable to travel within the state. Here are a few
          options that you can consider:</StyledDiv>
        </p>
        <h1><Styled isHigh={isHigh}>Renting a car</Styled></h1>
        <p><StyledDiv isHighlighted={isHighlighted}>
          Being in control of your travel takes away half the hassle of the
          holiday. You can go where you want, when you want. If you haven’t
          driven down to Himachal but are traveling in a group or with family,
          you can consider renting a car on a daily basis or booking one for the
          complete duration of your holiday. Some rental agencies might not
          allow you to take the car beyond city limits. Don’t forget your
          license. While a travel agency might turn a blind eye towards the lack
          of one, the local cops will not. You might need to pay a hefty fine or
          bribe your way out the situation.{" "}</StyledDiv>
        </p>
        <h1><Styled isHigh={isHigh}>Buses</Styled></h1>
        <p><StyledDiv isHighlighted={isHighlighted}>
          Local buses are a great way to see the Himachal that you might miss if
          you just zip through along the main highways. This is also a
          cost-effective way to travel if you on a tight budget. You can hop
          aboard a state-run inner-city bus that can take you to the remotest
          corners. Book tickets online or try your luck at the starting point.
          Since the buses are regular, you might not have to wait too long.
          Himachal Road Transport Corporation also offers buses for local
          sightseeing tours.</StyledDiv>
        </p>
        <h1><Styled isHigh={isHigh}>Motorcyle</Styled></h1>
        <p><StyledDiv isHighlighted={isHighlighted}>
          If you are feeling adventurous why not rent an Enfield motorcycle and
          roam around the state in complete abandon? Bikes can be rented for as
          low as Rs 350 (5 dollars) a day. Often you aren’t even required to
          possess a licence. Make sure you are an expert rider as Himachal
          should not be where you take your first bike lesson!</StyledDiv>
        </p>
      </div>
    </>
  );
};

export default Howtoreach;
