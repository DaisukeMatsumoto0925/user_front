import Modal from 'react-modal'

import styles from './index.module.css'

export type HuntModalProps = {
  modalIsOpen: boolean
  closeModal: () => void
  recode: any
}
const HuntModal = ({ modalIsOpen, closeModal, recode }: HuntModalProps) => {
  if (recode === {}) {
    return <div />
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={styles.modal}
      ariaHideApp={false}
      overlayClassName={styles.overlay}
    >
      {/* このデーターを使いなさい */}
      {recode?.trap_type?.value}
      {recode?.dealing_status?.value}
      {recode?.animal_name?.value}
      {recode?.weight?.value}
      {recode?.height?.value}
      {recode?.sex?.value}
      {recode?.caught_at?.value}
      {recode?.location?.value}
      {recode?.memo?.value}
      {recode?.created_at?.value}
      {recode?.updated_at?.value}
      {/* あやのはここから */}
      <div></div>
      {/* ここまで */}
    </Modal>
  )
}

export default HuntModal
