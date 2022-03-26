import styles from "./notification.module.css";

const Notification = ({ title, message, status }) => {
    let specialClasses = "";

    if (status ==="Error") {
        specialClasses = styles.error;
    } else if (status === "Success") {
        specialClasses = styles.success;
    } else {
        specialClasses = styles.pending;
    }

    const mainClass = `${styles.notification} ${specialClasses}`;
    return (
        <section className={mainClass}>
            <h2>{title}</h2>
            <p>{message}</p>
        </section>
    );
};
export default Notification;
