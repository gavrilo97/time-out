import * as React from "react";

const Kontakt = () => {
  return (
    <div className="w-full flex justify-center py-5">
      <div className="w-11/12 md:w-4/5">
        <h1 className="uppercase font-bold py-8 text-lg">Kontakt</h1>
        <p className="font-medium py-2"> Produkcijski centar:</p>
        <p className="py-2">
          Bulevar Zorana Đinđića 120, 11000 Beograd
          <br />
          E-mail: gavrilovic.stefan12@gmail.com
        </p>
        <p className="font-medium py-2"> Izdavač:</p>
        <p className="py-2">
          {" "}
          Time-Out <br />
          Bulevar Zorana Đinđića 120 <br /> 11000 Beograd
        </p>
        <p className="py-2"> Broj telefona: +381 60733 7301 </p>
      </div>
    </div>
  );
};

export default Kontakt;
