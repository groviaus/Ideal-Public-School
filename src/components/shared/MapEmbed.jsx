const MapEmbed = () => {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-md border border-slate-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132191578!2d-73.98811768459398!3d40.758895979327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="School Location Map"
      ></iframe>
    </div>
  )
}

export default MapEmbed

