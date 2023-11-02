import { Button } from "@chakra-ui/react";
import { ArrowRightIcon, EmailIcon } from "@chakra-ui/icons";

function ArrowRightIconIcon() {
  return null;
}

function App() {
  return (
    <>
      <Button colorScheme="blue">Lorem.</Button>
      <Button colorScheme="red">Lorem.</Button>
      <Button colorScheme="yellow">Adipisci.</Button>
      <Button colorScheme="orange">Laborum.</Button>
      <Button size={"sm"} colorScheme="teal">
        Eos?
      </Button>
      <Button size={"lg"} colorScheme="messenger">
        Repellat?
      </Button>
      <Button colorScheme="telegram" variant="outline">
        Iusto.
      </Button>
      <Button colorScheme="pink" variant="ghost">
        Repudiandae.
      </Button>
      <Button colorScheme="green" variant="link">
        Delectus.
      </Button>
      <Button leftIcon={<EmailIcon />}>Ducimus.</Button>
      <Button rightIcon={<ArrowRightIcon />}>Alias.</Button>
      <Button isLoading>Doloremque.</Button>
      <Button isLoading loadingText="전송 중...">
        Asperiores!
      </Button>
      <Button>Iste.</Button>
      <Button>Ipsa!</Button>
      <Button>Amet.</Button>
      <Button>Cumque.</Button>
      <Button>Dolorum?</Button>
      <Button>Perferendis.</Button>
      <Button>Soluta.</Button>
      <Button>Ipsam.</Button>
      <Button>Ratione.</Button>
      <Button>Rerum!</Button>
      <Button>Amet?</Button>
      <Button>Unde.</Button>
      <Button>Totam.</Button>
      <Button>Cum.</Button>
      <Button>Iste.</Button>
      <Button>Deleniti.</Button>
      <Button>Mollitia.</Button>
      <Button>Sunt?</Button>
    </>
  );
}

export default App;
