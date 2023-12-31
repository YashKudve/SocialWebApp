import { useDisclosure } from '@mantine/hooks';
import { Modal, useMantineTheme } from '@mantine/core';
import PostShare from './../PostShare/PostShare';


function ShareModal(modalOpened, setModalOpened) {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  
  return (
    <>
      <Modal className='modal'
        opened={modalOpened}
        size="50%"
        centered
        onClose={()=>setModalOpened(false)}
        close={close}
        // onClose={close}
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
          onClose:false
          // opened: {modalOpened},
          // onClose:()=>setModalOpened(false)
        }}
      >
       <PostShare/>
      </Modal>

      {/* <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group> */}
    </>
  );
}

export default ShareModal;