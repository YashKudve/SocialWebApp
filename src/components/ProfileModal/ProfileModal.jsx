import { useDisclosure } from '@mantine/hooks';
import { Modal, useMantineTheme } from '@mantine/core';


function ProfileModal(modalOpened, setModalOpened) {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  
  return (
    <>
      <Modal className='modal'
        opened={modalOpened}
        size="50%"
        centered
        onClose={()=>setModalOpened(false)}
        // onClose={close}
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
          onclose: false
          // opened: {modalOpened},
          // onClose:()=>setModalOpened(false)
        }}
      >
       <form action="" className='infoForm'>
        <h3>Your Info</h3>

        <div>
          <input type="text" className="infoInput" name='FirstName' placeholder='First Name'/>
          <input type="text" className="infoInput" name='LastName' placeholder='Last Name'/>
        </div>

        <div>

          <input type="text" className="infoInput" name='worksAt' placeholder='Works At'/>
        </div>

        <div>
          <input type="text" className="infoInput" name='livesIn' placeholder='Lives in'/>
          <input type="text" className="infoInput" name='country' placeholder='Country'/>

        </div>

        <div>
          <input type="text" className='infoInput' name="" placeholder='Relationship Status'/>
        </div>

        <div>
          Profile Image
          <input type="file" name='profileImg' /> 
          Cover Image
          <input type="file" name="coverImg" />
        </div>

        <button className='button infoButton'>Update</button>
       </form>
      </Modal>

      
    </>
  );
}

export default ProfileModal;