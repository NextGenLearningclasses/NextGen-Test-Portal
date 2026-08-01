from pathlib import Path
import re

text = Path("questions.txt").read_text(encoding="utf-8")

parts = re.split(r'(?=Q\d+)', text)

questions = []

for part in parts:

    part = part.strip()

    if not part.startswith("Q"):
        continue

    try:

        qid = int(re.search(r"Q(\d+)", part).group(1))

        question = re.search(
            r"Q\d+.*?\n\n(.*?)\n\nA\.",
            part,
            re.S
        ).group(1).strip()

        options = []

        for letter in "ABCD":

            m = re.search(
                rf"{letter}\.\s(.*?)(?=\n[ABCD]\.|\nCorrect Answer)",
                part,
                re.S
            )

            options.append(m.group(1).strip())

        answer = re.search(
            r"Correct Answer\s*\n\s*✅\s*([ABCD])",
            part
        ).group(1)

        explanation = re.search(
            r"Explanation\s*\n\s*(.*?)\n\s*Bloom:",
            part,
            re.S
        ).group(1).strip()

        questions.append(
            (qid, question, options, answer, explanation)
        )

    except Exception as e:
        print(f"Skipping question: {e}")

out = Path("questions/class9/science/cell.js")

out.parent.mkdir(parents=True, exist_ok=True)

with out.open("w", encoding="utf-8") as f:

    f.write("const QUESTION_BANK = [\n\n")

    for i, (qid, question, options, answer, explanation) in enumerate(questions):

        f.write("{\n")
        f.write(f"  id: {qid},\n")
        f.write(f"  question: {question!r},\n")
        f.write("  options: [\n")

        for j, option in enumerate(options):

            comma = "," if j < 3 else ""

            f.write(f"    {option!r}{comma}\n")

        f.write("  ],\n")

        f.write(f"  answer: {answer!r},\n")
        f.write(f"  explanation: {explanation!r},\n")
        f.write("  userAnswer: null\n")

        if i < len(questions) - 1:
            f.write("},\n\n")
        else:
            f.write("}\n")

    f.write("\n];")

print(f"\n✅ Done! {len(questions)} questions written to:")
print(out.resolve())