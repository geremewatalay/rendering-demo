"use client";
import { useEffect, useState } from "react";

export const Reviews = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 4000);
    }, []);

    return loading ? <div>Loading reviews...</div> : <div>Reviews</div>;
};
