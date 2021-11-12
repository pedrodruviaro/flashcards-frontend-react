import { useState } from "react";

const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Please type a valid email",
    },
    password: {
        regex: /^(?=.{6,72})/,
        message:
            "Password must contain at least 6 characters and a maximum of 72.",
    },
};

export const useForm = (type) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState(null);

    function onChange(event) {
        if (error) {
            validate(event.target.value);
        }

        setValue(event.target.value);
    }

    function validate(value) {
        if (type === false) {
            return true;
        }

        if (value.length === 0) {
            setError("Please fill out this field.");
            return false;
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    return {
        value,
        error,
        onChange,
        onBlur: () => validate(value),
        validate: () => validate(value),
    };
};
