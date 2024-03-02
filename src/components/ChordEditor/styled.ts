import { css } from "@emotion/css";
import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const EditorContainer = styled.div`
  padding: 20px;
  flex-grow: 1;
`;

export const Editor = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ChordLine = styled.div`
  height: 40%;
  border-bottom: #888 2px solid;
  display: flex;
`;

export const LineHeader = styled.div`
  width: 100px;
  height: 100%;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RhythmLine = styled.div`
  height: 40%;
  display: flex;
`;

export const ChordContainer = styled.div`
  flex-grow: 1;
  display: flex;
`;

export const ChordBox = (count: number) => css`
  height: 100%;
  width: calc(100% / ${count});
  border: 2px dotted #aaa;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

export const TonicChordBox = css`
  border: 2px solid #aaa;
  background-color: #477fff;
`;

export const SubDominantChordBox = css`
  border: 2px solid #aaa;
  background-color: #19e341;
`;

export const DominantChordBox = css`
  border: 2px solid #aaa;
  background-color: #ff475d;
`;