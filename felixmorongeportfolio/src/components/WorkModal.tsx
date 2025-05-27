
import '../styles/WorkModal.css';

type WorkModalProps = {
  logo: string;
  company: string;
  role: string;
  description: string;
  onClose: () => void;
};

export default function WorkModal({ logo, company, role, description, onClose }: WorkModalProps) {
  return (
    <div className="work-modal">
      <button className="modal-exit-button" onClick={onClose}>
        EXIT
      </button>

      <img src={logo} alt={`${company} logo`} className="modal-logo" />

      <h2 className="modal-company">{company}</h2>
      <h3 className="modal-role">{role}</h3>
      <p className="modal-description">{description}</p>
    </div>
    
  );
}
