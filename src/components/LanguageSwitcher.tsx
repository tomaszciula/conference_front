import { useEffect } from "react";

const LanguageSwitcher = (props: any) => {

	const handleChange = (event: any) => {
		// Handle the language change here
		props.setLang(event.target.value);
	};

	useEffect(() => {
		console.log("Language changed!", props.lang);
	}, [props.lang])

	return (
	  <div className="ml-20">
		<select onChange={handleChange} defaultValue="en">
		  <option value='en'>English</option>
		  <option value='pl'>Polski</option>
		</select>
	  </div>
	);
  }

  export default LanguageSwitcher;