export interface Person {
    fullName: string;
    role: string;
    imageUrl: string;
}

export interface Testimonial {
    person: Person;
    title: string;
    description: string;
}