const MapEmbed = () => {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-md border border-slate-200">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.8405883963997!2d84.3658834!3d26.071465699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992f0d83e054627%3A0xbfcf615ed72647c6!2sIDEAL%20PUBLIC%20SCHOOL!5e0!3m2!1sen!2sin!4v1781934894282!5m2!1sen!2sin"
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

