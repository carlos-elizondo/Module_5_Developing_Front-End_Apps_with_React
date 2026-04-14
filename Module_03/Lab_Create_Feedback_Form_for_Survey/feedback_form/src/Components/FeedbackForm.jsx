import { useState } from "react";
import "./FeedbackForm.css"; // Import CSS for styling

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
        rating: "",
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmationMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
      Rating: ${formData.rating}
    `;
        const isConfirmed = window.confirm(
            `Please confirm your details:\n\n${confirmationMessage}`,
        );
        if (isConfirmed) {
            console.log("Submitting feedback:", formData);
            setFormData({
                name: "",
                email: "",
                feedback: "",
                rating: "",
            });
            alert("Thank you for your valuable feedback!");
        }
    };
    return (
        <>
            <nav>Tell Us What You Think</nav>
            <form onSubmit={handleSubmit} className="feedback-form">
                <h2>We&apos;d Love to Hear From You!</h2>
                <p>Please share your feedback with us.</p>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <label htmlFor="feedback">Feedback</label>
                <textarea
                    name="feedback"
                    placeholder="Your Feedback"
                    id="feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                ></textarea>
                <div className="radioButtons">
                    <input
                        type="radio"
                        id="one"
                        name="rating"
                        value="1"
                        onChange={handleChange}
                        defaultChecked
                    />
                    <label htmlFor="one">1</label>
                </div>
                <div className="radioButtons">
                    <input
                        type="radio"
                        id="two"
                        name="rating"
                        value="2"
                        onChange={handleChange}
                    />
                    <label htmlFor="two">2</label>
                </div>
                <div className="radioButtons">
                    <input
                        type="radio"
                        id="three"
                        name="rating"
                        value="3"
                        onChange={handleChange}
                    />
                    <label htmlFor="three">3</label>
                </div>
                <div className="radioButtons">
                    <input
                        type="radio"
                        id="four"
                        name="rating"
                        value="4"
                        onChange={handleChange}
                    />
                    <label htmlFor="four">4</label>
                </div>
                <div className="radioButtons">
                    <input
                        type="radio"
                        id="five"
                        name="rating"
                        value="5"
                        onChange={handleChange}
                    />
                    <label htmlFor="five">5</label>
                </div>
                <button type="submit">Submit Feedback</button>
            </form>
        </>
    );
};

export default FeedbackForm;
