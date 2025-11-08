"use client";
import InfoCard from "./InfoCard";
import { CardData } from "@/utils/CardData";

const COLUMN_PATTERN = [4, 3, 4, 3, 4];

function splitIntoColumns(list: any[]) {
  let columns: any[][] = [[], [], [], [], []];

  let cardIndex = 0;
  for (let col = 0; col < 5; col++) {
    const count = COLUMN_PATTERN[col];
    columns[col] = list.slice(cardIndex, cardIndex + count);
    cardIndex += count;
  }

  return columns;
}
const InfoCardContainer = () => {
  const columns = splitIntoColumns(CardData);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 w-full mx-auto p-2  bg-black"
      aria-label="Information card gallery">
        {columns.map((col, i) => (
          <div
            key={i}
            className="flex flex-col gap-2"
            style={{
              marginTop: i % 2 === 1 ? "70%" : "0",
            }}
          >
            {col.map((item, index) => (
              <InfoCard
                key={index}
                type={item.type}
                logo={item.logo}
                name={item.name}
                role={item.role}
                quote={item.quote}
                bg={item.bg}
                bgGradient={item.bgGradient}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default InfoCardContainer;
