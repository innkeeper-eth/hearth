function Bards() {
    return (
        <>
            <Flex flexDirection={'column'} alignItems='center'>
                <Heading as='h1' size='2xl' margin='0 auto' pt='1em' fontFamily='Zen Antique, serif' color={'#F7B05B'}>
                    Artists in Residence
                </Heading>
                <Flex margin='1em auto' flexDirection={{ base: 'column', md: 'row' }} >
                    <EventCard />
                    <EventCard />

                </Flex>
            </Flex>
        </>
    );
}

export default Bards;