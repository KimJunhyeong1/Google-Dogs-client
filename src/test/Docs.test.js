import { render } from "@testing-library/react";
import { useSelector } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import Docs from "../components/Docs";

jest.mock("react-redux");

describe("Docs", () => {
  function renderDocs() {
    return render(<Docs />, { wrapper: MemoryRouter });
  }

  describe("with docs", () => {
    it("renders docs", () => {
      const mockStore = {
        docs: {
          byId: {
            Id1: { id: "Id1", title: "문서1" },
            Id2: { id: "Id2", title: "문서2" },
          },
          allIds: ["Id1", "Id2"],
        },
      };
      useSelector.mockImplementation((selector) => selector(mockStore));

      const { container } = renderDocs();

      expect(container).toHaveTextContent("문서1");
      expect(container).toHaveTextContent("문서2");
    });
  });

  describe("without docs", () => {
    it("render no docs message", () => {
      const mockStore = {
        docs: {
          byId: {},
          allIds: [],
        },
      };
      useSelector.mockImplementation((selector) => selector(mockStore));

      const { container } = renderDocs();

      expect(container).toHaveTextContent("나의 문서를 작성해보세요!");
    });
  });
});
