
type SuccessModalProps = {
  text: string
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const SuccessModal = ({ text, setShowModal }: SuccessModalProps) => {
  return (
    <div className='modal' tabIndex={1} role='dialog' style={{ display: 'block' }}>
    <div className='modal-dialog' role='document'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title' style={{ color: '#3D9751' }}>Success</h5>
        </div>
        <div className='modal-body'>
          <p>{text}</p>
        </div>
        <div className='modal-footer'>
          <button type='button' className='btn btn-success' data-dismiss='modal' onClick={() => setShowModal(false)}>Close</button>
        </div>
      </div>
    </div>
  </div>
  )
}