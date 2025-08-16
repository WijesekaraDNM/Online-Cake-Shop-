import React, { useState } from 'react';
import { FaBirthdayCake, FaPalette, FaCalendarAlt, FaWeightHanging } from 'react-icons/fa';
import { MdAttachMoney, MdDescription } from 'react-icons/md';
import Title from '../../Components/Title/Title';
import classes from './custom.module.css';

export default function CustomDesignPage() {
  const [designData, setDesignData] = useState({
    occasion: '',
    flavor: 'vanilla',
    size: 'medium',
    colorScheme: '',
    deliveryDate: '',
    budget: '',
    specialRequests: '',
    referenceImage: null
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDesignData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setDesignData(prev => ({ ...prev, referenceImage: e.target.files[0] }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Design submitted:', designData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className={classes.submissionSuccess}>
        <div className={classes.successContent}>
          <h2>Thank You!</h2>
          <p>Your custom cake request has been submitted successfully.</p>
          <p>Our team will review your design and contact you within 24 hours to discuss details.</p>
          <button 
            className={classes.homeButton}
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(1);
              setDesignData({
                occasion: '',
                flavor: 'vanilla',
                size: 'medium',
                colorScheme: '',
                deliveryDate: '',
                budget: '',
                specialRequests: '',
                referenceImage: null
              });
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.customDesignPage}>
      <Title 
        title="Design Your Dream Cake" 
        margin="2rem 0 1rem 0" 
        fontSize="2.5rem" 
        color="#5c2a2a"
        display="flex"
        justifyContent="center"
        alignItems="center"
      />

      <div className={classes.designContainer}>
        {/* Progress Steps */}
        <div className={classes.progressSteps}>
          {[1, 2, 3].map(step => (
            <div 
              key={step}
              className={`${classes.step} ${currentStep === step ? classes.active : ''} ${currentStep > step ? classes.completed : ''}`}
            >
              <div className={classes.stepNumber}>{step}</div>
              <div className={classes.stepLabel}>
                {step === 1 && 'Basic Info'}
                {step === 2 && 'Design Details'}
                {step === 3 && 'Finalize'}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className={classes.designForm}>
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className={classes.formStep}>
              <h2 className={classes.stepTitle}>
                <FaBirthdayCake /> Cake Basics
              </h2>
              
              <div className={classes.formGroup}>
                <label htmlFor="occasion">Occasion</label>
                <input
                  type="text"
                  id="occasion"
                  name="occasion"
                  value={designData.occasion}
                  onChange={handleChange}
                  placeholder="e.g., Birthday, Wedding, Anniversary"
                  required
                />
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="flavor">Flavor</label>
                <select
                  id="flavor"
                  name="flavor"
                  value={designData.flavor}
                  onChange={handleChange}
                  required
                >
                  <option value="vanilla">Vanilla</option>
                  <option value="chocolate">Chocolate</option>
                  <option value="red-velvet">Red Velvet</option>
                  <option value="fruit">Fruit Cake</option>
                  <option value="cheesecake">Cheesecake</option>
                  <option value="carrot">Carrot Cake</option>
                </select>
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="size">Size</label>
                <div className={classes.radioGroup}>
                  {['small', 'medium', 'large', 'x-large'].map(size => (
                    <label key={size} className={classes.radioOption}>
                      <input
                        type="radio"
                        name="size"
                        value={size}
                        checked={designData.size === size}
                        onChange={handleChange}
                        required
                      />
                      <span>{size.charAt(0).toUpperCase() + size.slice(1)}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Design Details */}
          {currentStep === 2 && (
            <div className={classes.formStep}>
              <h2 className={classes.stepTitle}>
                <FaPalette /> Design Details
              </h2>
              
              <div className={classes.formGroup}>
                <label htmlFor="colorScheme">Color Scheme</label>
                <input
                  type="text"
                  id="colorScheme"
                  name="colorScheme"
                  value={designData.colorScheme}
                  onChange={handleChange}
                  placeholder="e.g., Pink and gold, Blue and silver"
                />
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="deliveryDate">
                  <FaCalendarAlt /> Delivery Date
                </label>
                <input
                  type="date"
                  id="deliveryDate"
                  name="deliveryDate"
                  value={designData.deliveryDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="budget">
                  <MdAttachMoney /> Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={designData.budget}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select budget range</option>
                  <option value="5000-10000">LKR 5,000 - 10,000</option>
                  <option value="10000-20000">LKR 10,000 - 20,000</option>
                  <option value="20000-30000">LKR 20,000 - 30,000</option>
                  <option value="30000+">LKR 30,000+</option>
                </select>
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="referenceImage">Reference Image (Optional)</label>
                <input
                  type="file"
                  id="referenceImage"
                  name="referenceImage"
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </div>
            </div>
          )}

          {/* Step 3: Final Details */}
          {currentStep === 3 && (
            <div className={classes.formStep}>
              <h2 className={classes.stepTitle}>
                <MdDescription /> Special Requests
              </h2>
              
              <div className={classes.formGroup}>
                <label htmlFor="specialRequests">Any special requests or dietary restrictions?</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows="5"
                  value={designData.specialRequests}
                  onChange={handleChange}
                  placeholder="e.g., Gluten-free, nut-free, specific decorations, etc."
                ></textarea>
              </div>

              <div className={classes.summary}>
                <h3>Order Summary</h3>
                <div className={classes.summaryItem}>
                  <span>Occasion:</span>
                  <span>{designData.occasion || 'Not specified'}</span>
                </div>
                <div className={classes.summaryItem}>
                  <span>Flavor:</span>
                  <span>{designData.flavor}</span>
                </div>
                <div className={classes.summaryItem}>
                  <span>Size:</span>
                  <span>{designData.size}</span>
                </div>
                <div className={classes.summaryItem}>
                  <span>Color Scheme:</span>
                  <span>{designData.colorScheme || 'Not specified'}</span>
                </div>
                <div className={classes.summaryItem}>
                  <span>Delivery Date:</span>
                  <span>{designData.deliveryDate || 'Not specified'}</span>
                </div>
                <div className={classes.summaryItem}>
                  <span>Budget:</span>
                  <span>{designData.budget || 'Not specified'}</span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className={classes.formNavigation}>
            {currentStep > 1 && (
              <button 
                type="button" 
                className={classes.prevButton}
                onClick={prevStep}
              >
                Back
              </button>
            )}
            
            {currentStep < 4 ? (
              <button 
                type="button" 
                className={classes.nextButton}
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && !designData.occasion) ||
                  (currentStep === 2 && !designData.deliveryDate)
                }
              >
                Next
              </button>
            ) : (
              <button 
                type="submit" 
                className={classes.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Design Request'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}