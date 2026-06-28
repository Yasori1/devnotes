export const CATEGORİES =[
    "Tümü",
    "Javascript",
    "React",
    "Node.js",
    "CSS",
    "Git",
    "Diğer"
];

export function formatDate(isoString) {
    return new Date(isoString).toLocaleDateString("tr-TR", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

export function parseTags(tagString){
    return tagString
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
}