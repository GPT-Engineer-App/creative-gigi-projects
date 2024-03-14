import React from "react";
import { Box, Container, Heading, Text, Image, SimpleGrid, Link, Icon } from "@chakra-ui/react";
import { FaBehance, FaDribbble, FaLinkedin, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Project 1",
    description: "A short description of project 1",
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1eCUyMHByb2plY3QlMjAxfGVufDB8fHx8MTcxMDQxNDk2MHww&ixlib=rb-4.0.3&q=80&w=1080',
    link: "#",
  },
  {
    title: "Project 2",
    description: "A short description of project 2",
    image: 'https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1eCUyMHByb2plY3QlMjAyfGVufDB8fHx8MTcxMDQxNDk2MHww&ixlib=rb-4.0.3&q=80&w=1080',
    link: "#",
  },
  {
    title: "Project 3",
    description: "A short description of project 3",
    image: 'https://images.unsplash.com/photo-1701486822668-84a4bd93b059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1eCUyMHByb2plY3QlMjAzfGVufDB8fHx8MTcxMDQxNDk2MHww&ixlib=rb-4.0.3&q=80&w=1080',
    link: "#",
  },
];

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Container maxW="container.lg" py={8}>
        <Box textAlign="center" mb={8}>
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwR2lnaXxlbnwwfHx8fDE3MTA0MTQ5NjB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Gigi" mx="auto" mb={4} />
          <Heading as="h1" size="xl" mb={2}>
            Gigi
          </Heading>
          <Text fontSize="xl" color="gray.500">
            UX Designer
          </Text>
          <Box mt={4}>
            <Link href="#" mr={4}>
              <Icon as={FaBehance} boxSize={6} />
            </Link>
            <Link href="#" mr={4}>
              <Icon as={FaDribbble} boxSize={6} />
            </Link>
            <Link href="#" mr={4}>
              <Icon as={FaLinkedin} boxSize={6} />
            </Link>
            <Link href="#">
              <Icon as={FaGithub} boxSize={6} />
            </Link>
          </Box>
        </Box>

        <SimpleGrid columns={[1, 2, 3]} spacing={8}>
          {projects.map((project, index) => (
            <Link href={project.link} key={index}>
              <Box bg="white" p={6} borderRadius="md" boxShadow="md">
                <Image src={project.image} alt={project.title} mb={4} />
                <Heading as="h3" size="md" mb={2}>
                  {project.title}
                </Heading>
                <Text color="gray.600">{project.description}</Text>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Index;
