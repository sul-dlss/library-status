import PropTypes from "prop-types";

const GlobalStatusSummary = ({ status }) => (
  <div id="GlobalStatusSummary" className="section">
    <div className="status-icon">{status.icon}</div>
    <div className="status-legend">{status.legend}</div>
    <p>{status.global_message || status.message}</p>
  </div>
);

GlobalStatusSummary.propTypes = {
  status: PropTypes.object.isRequired,
};

export default GlobalStatusSummary;
