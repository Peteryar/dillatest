const Radio = ({ label, mode, switchMode }) => (
    <label>
        <input onClick={e=>switchMode(e.target.value)} value={mode} name="admin-main" type="radio" />
        {label}
    </label>
)
export default Radio;