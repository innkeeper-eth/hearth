import { CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import {
    Box,
    Flex,
    Grid,
    Heading,
    Text,
} from "@chakra-ui/react";
import styled from '@emotion/styled';
import { FaPaintBrush } from 'react-icons/fa';


const StyledCard = styled(Flex)`
  flex-direction: column;
  color: #000;
  background-color: #fff;
  padding: 1em;
  border-radius: 7px;
  justify-content: space-between;

  transition: all 0.25s ease-in-out;

  & h3 {
    font-family: Zen Antique, serif;
    letter-spacing: 0.75px;
  }

  :hover {
      transition: all 0.25s ease-in-out;
      transform: translate3d(-3px, -3px, -3px);
  }
`;

const EventCard = ({ record }) => {
    const { eventStart, title, memo } = record.fields;

    let artists = ['n/a'];
    if (record.fields.artists) {
        artists = record.fields.artists;
    }

    const date = new Date(Date.parse(eventStart));
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.toLocaleString('default', { day: 'numeric' });
    const dayName = date.toLocaleString('default', { weekday: 'short' });
    const time = date.toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit', hour12: false });

    return (
        <StyledCard
            m={{ base: '1em auto', md: '1em' }}
            w={{ base: '90vw', md: '45vw', lg: '400px' }}
        >
            <Heading as='h3' size="lg">{title}</Heading>
            <Flex pt={3} alignItems="center">
                <FaPaintBrush/>
                {artists.map(artist => (
                    <Text mx={2}>
                        <a href={artist.url}>
                        {artist.name}
                        </a>
                    </Text>
                ))}
            </Flex>
            <Text py={3}>
                {memo}
            </Text>
            <Flex alignItems='center' justifyContent="space-between" fontWeight='700' letterSpacing='1px' fontFamily='Montserrat, sans-serif'>
                <Flex alignItems='center'><CalendarIcon /><Text ml={2}>{dayName} {month} {day}</Text></Flex>
                <Flex alignItems='center'><TimeIcon /><Text ml={2}> {time} </Text></Flex>
            </Flex>
        </StyledCard>
    );
};

function Events({ records }) {
    return (
        <>
            <Flex flexDirection={'column'} alignItems='center'>
                <Heading as='h1' size='2xl' margin='0 auto' pt='1em' fontFamily='Zen Antique, serif' color={'#F7B05B'}>
                    Upcoming Events
                </Heading>
                <Flex margin='1em auto' flexDirection={{ base: 'column', md: 'row' }}>

                    {records.map((record, key) => (
                        <EventCard key={key} record={record} />
                    ))}
                </Flex>
            </Flex>
        </>
    );
}

export default Events;
