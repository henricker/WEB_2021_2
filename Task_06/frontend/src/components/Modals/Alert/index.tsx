type AlertModalProps = {
  text: string
  setShowModalError: React.Dispatch<React.SetStateAction<boolean>>
}

export const AlertModal: React.FC<AlertModalProps> = ({ text, setShowModalError }: AlertModalProps) => {

  return (
    <div className='modal' tabIndex={1} role='dialog' style={{ display: 'block' }}>
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' style={{ color: 'red' }}>Error</h5>
          </div>
          <div className='modal-body'>
            <p>{text}</p>
          </div>
          <div className='modal-footer'>
            <button type='button' className='btn btn-danger' data-dismiss='modal' onClick={() => setShowModalError(false)}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}