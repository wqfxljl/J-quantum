---
title: Quantum states and Witnesses
category: research
date: 2026-10-21
status: exploring
---
```markdown
# 量子态的资源性质、集合结构与 Witness 刻画

> 个人研究笔记 · 2026-10-21  
> 范围：研究思路、资源集合与 Witness、五类量子态性质、方法总结。不同资源集合的包含关系及间接认证留待后续单独讨论。

## 1. 研究思路：如何刻画未知量子资源？

### 1.1 研究对象

量子信息中讨论的资源可以是 quantum states、measurements、channels 或 networks。一个对象具有什么资源意义，取决于我们关心的物理性质、允许的操作以及具体的信息处理能力。

本笔记暂时只关注 **quantum states**：给定未知量子态 $\rho$，如何判断它是否具有 Entanglement、Magic、Bell nonlocality、Steering 或 Teleportation usefulness 等性质？

这里的核心不是罗列资源名称，而是建立一条可重复使用的研究路径：

**研究对象 $\longrightarrow$ 指定性质或限制 $\longrightarrow$ 资源集合 $\longrightarrow$ 有限测量数据 $\longrightarrow$ Witness / Inequality $\longrightarrow$ 资源认证。**

### 1.2 从物理性质到资源集合

有限维 Hilbert space $\mathcal H$ 上的态全集为

$$
\mathcal D(\mathcal H)=\{\rho\succeq0:\operatorname{Tr}\rho=1\}.
$$

根据某种性质或限制，定义相应集合 $\mathcal C\subseteq\mathcal D(\mathcal H)$。例如，$\mathcal C$ 可以是 Separable states、Stabilizer mixtures 或 Bell-local states。最基本的资源判定问题是

$$
\boxed{\rho\in\mathcal C\quad\text{or}\quad\rho\notin\mathcal C.}
$$

通常将 $\mathcal C$ 视为满足指定限制的集合。若能够排除 $\rho\in\mathcal C$，便可以认证它具有相应的资源性质。集合的定义必须同时明确适用的系统维数、测量类别和操作假设；特别是 Bell nonlocality、Steering 和 Teleportation usefulness 都可能依赖这些条件。

### 1.3 为什么使用 Witness，而不是完整 State Tomography？

Full state tomography 试图通过 informationally complete measurements 重建整个 $\rho$。但如果只关心某一种性质，往往没有必要先获得完整密度矩阵。

假设仅测量 $m$ 个可观测量 $O_i$，得到

$$
 d_i=\langle O_i\rangle_\rho=\operatorname{Tr}(\rho O_i),
 \qquad \mathbf d=(d_1,\ldots,d_m).
$$

如果能够找到一个仅依赖这些数据的函数 $W(\mathbf d)$，满足

$$
W(\mathbf d(\sigma))\le\beta_{\mathcal C},
\qquad \forall\sigma\in\mathcal C,
$$

则观测到

$$
\boxed{W(\mathbf d(\rho))>\beta_{\mathcal C}}
$$

即可排除受限集合 $\mathcal C$。这是基于 measurement statistics 的资源认证，而不是依赖事先已知的态表达式。

**需要区分三点：**（i）Witness violation 是可靠的充分认证；（ii）单个 Witness 不违反，不代表态一定属于 $\mathcal C$；（iii）不进行全局 state tomography 不等于 measurement devices 一定不需要被信任。实验中还必须对有限采样误差进行统计处理。

---

## 2. 资源集合的几何结构与 Witness

### 2.1 Convexity

集合 $\mathcal C$ 为 convex set，当且仅当

$$
\rho_1,\rho_2\in\mathcal C,\ p\in[0,1]
\quad\Longrightarrow\quad
p\rho_1+(1-p)\rho_2\in\mathcal C.
$$

物理上，这表示对满足限制的态进行 classical mixing 后，所得态仍满足同一限制。否则 $\mathcal C$ 是 nonconvex set。

要区分 **state set** 与 **correlation set**：即使某种态集合是 convex，也不能据此直接判断增加 source independence 等约束后的 network correlation set 是否 convex。

### 2.2 Linear Witness 与 Separating Hyperplane

对于有限维空间中的 closed convex set $\mathcal C$，若 $\rho\notin\mathcal C$，存在 Hermitian 算符 $H$，使得

$$
\operatorname{Tr}(H\sigma)\ge0\quad(\forall\sigma\in\mathcal C),
\qquad \operatorname{Tr}(H\rho)<0.
$$

这里 $H$ 是一个 linear Witness；其几何含义是用 separating hyperplane 将目标态与 $\mathcal C$ 分开。若

$$
H=\sum_{i=1}^m c_i O_i,
\qquad
\operatorname{Tr}(H\rho)=\sum_i c_i d_i,
$$

就只需要估计参与展开的期望值，而不需要完整 tomography。

对固定测量数据，真正需要判断的是

$$
\mathbf d(\rho)\in\mathbf d(\mathcal C)\ \text{还是}\ \mathbf d(\rho)\notin\mathbf d(\mathcal C),
$$

其中 $\mathbf d(\mathcal C)=\{\mathbf d(\sigma):\sigma\in\mathcal C\}$ 是受限态集合在可观测数据空间中的投影。**数据投影可能将原本不同的态映到同一个点，因此有限观测通常无法区分所有资源。**

### 2.3 Nonconvex Set 与 Nonlinear Witness

对于任意 linear functional $L$，

$$
\sup_{\rho\in\mathcal C}L(\rho)
=
\sup_{\rho\in\operatorname{conv}(\mathcal C)}L(\rho).
$$

因此，所有线性上界都无法识别 $\operatorname{conv}(\mathcal C)\setminus\mathcal C$ 内的点。若希望刻画真正由 nonconvexity 产生的限制，就可能需要 nonlinear inequalities、polynomial constraints 或更一般的 feasibility tests。

例如，bilocal network 中的 source independence 要求

$$
p(\lambda_1,\lambda_2)=p(\lambda_1)p(\lambda_2),
$$

从而在 correlation level 引入非凸约束。这一例子只是帮助理解集合结构的作用；本笔记随后仍聚焦量子态。

### 2.4 基于数据的集合排除与优化

给定测量数据 $\mathbf d$，定义

$$
\mathcal C(\mathbf d)=
\{\sigma\in\mathcal C:\operatorname{Tr}(\sigma O_i)=d_i,\ \forall i\}.
$$

若 $\mathcal C(\mathbf d)=\varnothing$，则所有满足限制的态都无法解释实验数据，资源认证成立。

固定 linear functional $L(\rho)=\sum_i c_i\langle O_i\rangle_\rho$ 后，其受限界由

$$
\beta_{\mathcal C}=\sup_{\sigma\in\mathcal C}L(\sigma)
$$

给出。具体优化可能使用 LP、SDP、convex optimization 或 polynomial optimization。最优化得到的 bound 与用于实现它的具体测量方案，是两个需要分别检验的问题。

### 2.5 如何评价 Witness？

- **Validity：** 所有受限资源是否都满足相应不等式？
- **Tightness：** bound 是否可以达到，能否给出 saturating strategy？
- **Detection power：** 能够识别 $\mathcal D(\mathcal H)\setminus\mathcal C$ 的哪些部分？
- **Completeness：** 一组 Witness 是否足以排除所有集合外资源（在指定数据与测量条件下）？
- **Quantification：** 能否将观测违反值转化为资源测度的 lower bound？

**Tightness 不等于 Completeness。** 一条不等式即使有达到 bound 的策略，也不意味着它能检测所有集合外的态。

---

## 3. 五类量子态性质及其典型 Witness

以下每节均采用：**物理性质 → 数学定义 → 受限集合 → 典型 Witness → 检测特点**。

### 3.1 Entanglement 与 Separable States

**定义。** 对双体态 $\rho_{AB}$，若存在概率分布 $p_\lambda$ 与局部态 $\rho_A^\lambda,\rho_B^\lambda$，使得

$$
\boxed{
\rho_{AB}=\sum_\lambda p_\lambda\rho_A^\lambda\otimes\rho_B^\lambda,
}
$$

则称其为 separable；否则为 entangled。Separable states 构成 closed convex set

$$
\mathcal S_{\mathrm{sep}}=
\operatorname{conv}\{\rho_A\otimes\rho_B\}.
$$

**Entanglement Witness。** Hermitian 算符 $H$ 满足

$$
\operatorname{Tr}(H\sigma)\ge0\quad(\forall\sigma\in\mathcal S_{\mathrm{sep}}),
\qquad
\operatorname{Tr}(H\rho)<0
$$

时，即认证 $\rho$ entangled。对于两个 qubit，一个例子为

$$
H_{\mathrm{ent}}=\tfrac12I_4-|\Phi^+\rangle\langle\Phi^+|,
\qquad |\Phi^+\rangle=\frac{|00\rangle+|11\rangle}{\sqrt2}.
$$

利用 Pauli decomposition，

$$
H_{\mathrm{ent}}=
\tfrac14(I- X\otimes X+Y\otimes Y-Z\otimes Z).
$$

因此，仅测量 $XX,YY,ZZ$ 的 correlators，就可以用

$$
\boxed{\langle XX\rangle-\langle YY\rangle+\langle ZZ\rangle>1}
$$

认证 Entanglement，而无需完整的两 qubit tomography。

**PPT criterion。** 所有 separable states 满足 $\rho_{AB}^{T_B}\succeq0$。在 $2\times2$ 和 $2\times3$ 维度中，PPT 是 separability 的充要条件；更高维中存在 PPT entangled states。

**关注点。** Separable set 的 convexity、Witness 的测量分解、PPT 的适用范围，以及有限测量下的 Detection power。

### 3.2 Magic 与 Stabilizer Polytope

**定义。** 在多 qubit stabilizer resource theory 中，non-magic free states 为 stabilizer pure states 的 convex hull：

$$
\boxed{
\mathcal S_{\mathrm{stab}}
=\operatorname{conv}\{|s\rangle\langle s|:\ |s\rangle\text{ 是 stabilizer pure state}\}.
}
$$

若 $\rho\notin\mathcal S_{\mathrm{stab}}$，则 $\rho$ 具有 Magic。该定义依赖所采用的 stabilizer framework；不能直接推广为所有维数和自由操作下的唯一 magic 定义。

**几何结构。** 对单 qubit，写

$$
\rho=\tfrac12(I+r_xX+r_yY+r_zZ).
$$

六个 stabilizer pure states 对应 Bloch ball 上的 $\pm X,\pm Y,\pm Z$ 方向，其 convex hull 是正八面体：

$$
\boxed{|r_x|+|r_y|+|r_z|\le1.}
$$

**Magic Witness。** 例如，对所有单 qubit non-magic states，

$$
\langle X\rangle+\langle Y\rangle+\langle Z\rangle\le1.
$$

若实验违反该不等式，则认证 Magic。对

$$
|T\rangle=\frac{|0\rangle+e^{i\pi/4}|1\rangle}{\sqrt2},
$$

有 $\langle X\rangle=\langle Y\rangle=1/\sqrt2$、$\langle Z\rangle=0$，因此违反值为 $\sqrt2>1$。完整的单 qubit stabilizer polytope 需要考虑所有符号选择对应的 facet inequalities。

**关注点。** Stabilizer polytope 的 facets、有限 Pauli measurements 构造的 Witness，以及 Robustness of Magic 等 Quantification 方法。

### 3.3 Bell Locality 与 Bell Nonlocality

**关联与定义。** 考虑 Alice 输入 $x$、输出 $a$，Bob 输入 $y$、输出 $b$。观察到的行为为 $p(ab|xy)$。若存在 local hidden-variable（LHV）model，

$$
\boxed{
p(ab|xy)=\int d\lambda\,p(\lambda)\,p(a|x,\lambda)p(b|y,\lambda),
}
$$

则该 **correlation** 是 Bell local。量子模型为

$$
p(ab|xy)=\operatorname{Tr}[(M_{a|x}\otimes N_{b|y})\rho_{AB}].
$$

必须区分 **Bell-local correlations** 与 **Bell-local states**：前者针对一个输入输出分布，后者要求一个态在指定类别的*全部允许局部测量*下都只产生 Bell-local correlations。定义后者时应写明 projective measurements 或 POVMs 等测量限制。

**Bell Inequality。** 在 $2\!\times\!2$ 输入、二值输出场景下，CHSH 为

$$
\boxed{
S_{\mathrm{CHSH}}=
\langle A_0B_0\rangle+\langle A_0B_1\rangle
+\langle A_1B_0\rangle-\langle A_1B_1\rangle\le2,
}
$$

对相应反向不等式亦有 $|S_{\mathrm{CHSH}}|\le2$。量子理论允许 $|S_{\mathrm{CHSH}}|\le2\sqrt2$（Tsirelson bound）。观测到 $|S_{\mathrm{CHSH}}|>2$ 排除 LHV model，从而认证产生该关联的态可以展示 Bell nonlocality。

**认证特点。** Bell Inequality 直接作用于 input-output statistics $p(ab|xy)$；在相应 Bell-test 假设下，不需要预先标定设备中的具体测量算符。对固定有限 Bell scenario，local correlation set 是 convex polytope。单条 CHSH 不违反，不代表该态对其他测量或其他 Bell inequalities 均为 local。

### 3.4 Quantum Steering 与 Unsteerable States

**Assemblage。** 在 Alice（untrusted）$\to$ Bob（trusted）场景，Alice 对 $\rho_{AB}$ 施加 $M_{a|x}$ 后，Bob 的 subnormalized conditional states 为

$$
\boxed{
\sigma_{a|x}=\operatorname{Tr}_A[(M_{a|x}\otimes I_B)\rho_{AB}].
}
$$

其集合 $\{\sigma_{a|x}\}_{a,x}$ 称为 assemblage，满足

$$
\sigma_{a|x}\succeq0,
\qquad\sum_a\sigma_{a|x}=\rho_B.
$$

**LHS model。** 如果存在

$$
\boxed{
\sigma_{a|x}=\int d\lambda\,p(\lambda)\,p(a|x,\lambda)\rho_\lambda,
}
$$

则该 assemblage 为 unsteerable；否则展示 Alice-to-Bob Steering。Steering 的方向以及 Alice 允许的测量集合，都必须固定。

**Steering Witness。** 对某组 Hermitian $F_{a|x}$，若所有 LHS assemblages 满足

$$
\boxed{
\sum_{a,x}\operatorname{Tr}(F_{a|x}\sigma_{a|x})\le\beta_{\mathrm{LHS}},
}
$$

而观测到更大值，就认证 Steering。

**SDP 形式。** 有限输入输出下，可将 LHS 分解写为

$$
\sigma_{a|x}=\sum_\lambda D(a|x,\lambda)\tau_\lambda,
\qquad \tau_\lambda\succeq0,
$$

其中 $D(a|x,\lambda)$ 为 deterministic response。由此可建立 SDP feasibility test，其对偶可提供 Steering Witness。

**认证特点。** 实验上可以由 Bob 一侧的可信 measurements 估计 assemblage，不要求对完整 bipartite state 做 tomography。Steering 使用的是不同于 Bell test 的设备信任结构，不能将二者的数据与假设直接混用。

### 3.5 Teleportation Usefulness

**问题。** 除了直接以态的非经典性质定义限制，还可以依据具体 quantum information task 的最优性能定义资源集合。一个例子是：共享态是否能在指定 Teleportation protocol 下超过 classical fidelity benchmark？

**Fully Entangled Fraction（FEF）。** 对 $d\times d$ 态 $\rho$，令

$$
|\Phi_d\rangle=d^{-1/2}\sum_{j=0}^{d-1}|jj\rangle,
$$

并定义

$$
\boxed{
f(\rho)=\max_U\langle\Phi_d|(I\otimes U)\rho(I\otimes U^\dagger)|\Phi_d\rangle.
}
$$

对于以 Bell measurement 与对应 local-unitary correction 为基础、并对共享资源的局部酉基选择进行优化的 **standard Teleportation protocol**，平均保真度为

$$
F_{\mathrm{tel}}(\rho)=\frac{d f(\rho)+1}{d+1}.
$$

均匀未知纯态在无预共享纠缠的 measure-and-prepare 策略下，最优 classical benchmark 为

$$
F_{\mathrm{cl}}=\frac2{d+1}.
$$

因此，在此协议假设下，

$$
\boxed{F_{\mathrm{tel}}>F_{\mathrm{cl}}\quad\Longleftrightarrow\quad f(\rho)>\frac1d.}
$$

**Teleportation Witness。** 对两个 qubit，可用

$$
H_{\mathrm{tel}}=\tfrac12I_4-|\Phi^+\rangle\langle\Phi^+|.
$$

若 $\operatorname{Tr}(H_{\mathrm{tel}}\rho)<0$，则 $\langle\Phi^+|\rho|\Phi^+\rangle>1/2$，进而 $f(\rho)>1/2$，可认证该资源在 standard protocol 下优于 classical benchmark。

这里的 Witness 提供充分认证，但不必检测所有满足 $f(\rho)>1/2$ 的态，因为有些态需要先优化局部酉基才能由该固定投影检测到。

**协议依赖。** 如果允许额外的 LOCC preprocessing、filtering 或其他优化协议，Teleportation usefulness 的定义与判据需要相应调整。不能把 standard protocol 的 FEF 判据无条件当成所有 Teleportation protocols 的必要充分条件。

---

## 4. 不同 Witness 的构造方法与认证能力

### 4.1 共同结构

上述五类问题虽然物理含义不同，但数学任务具有共同形式：

1. 选择待认证的性质，并定义受限集合 $\mathcal C$；
2. 指定实验允许获取的数据 $\mathbf d$；
3. 描述 $\mathbf d(\mathcal C)$ 在数据空间中的约束；
4. 构造可检验的 Witness / Inequality，排除与数据不相容的受限模型；
5. 分析 Validity、Tightness、Detection power 与 Quantification。

### 4.2 资源定义、实验数据与典型判据

| 资源性质 | 被排除的受限模型 | 主要实验数据 | 典型工具 |
| --- | --- | --- | --- |
| Entanglement | Separable decomposition | Trusted correlators / expectation values | Entanglement Witness、PPT |
| Magic | Stabilizer mixtures | Pauli expectation values | Stabilizer facet inequalities、Magic Witness |
| Bell nonlocality | LHV model | $p(ab\mid xy)$ | Bell Inequalities（如 CHSH） |
| Steering | LHS model | Assemblage / Bob-side trusted statistics | Steering Inequalities、SDP |
| Teleportation usefulness | 指定协议下不超过 classical benchmark 的态 | Fidelity-related observables | Teleportation Witness |

### 4.3 Convexity 与所研究对象的区别

在本笔记所采用的**固定系统维数、固定操作与测量类别**下，这五类典型受限态集合都具有 convex structure：

- Separable states 是 product states 的 convex hull；
- Stabilizer mixtures 构成 Stabilizer polytope；
- Bell-local states 在固定允许测量类别下对 classical mixing 封闭；
- Unsteerable states / LHS assemblages 在固定场景下对 classical mixing 封闭；
- Standard Teleportation 的 non-useful set $\{\rho:f(\rho)\le1/d\}$ 为 convex set，因为 $f(\rho)$ 是 linear functionals 的 supremum，因此是 convex function。

所以，**“量子资源刻画需要关注 nonconvex set”是一条一般方法论，但不能为了展示非凸性而把这些标准态集合误称为 nonconvex。** 非凸性可能来自另一些资源定义，特别是 network source independence 等对 correlation 的额外约束。

### 4.4 有限实验数据、Witness 与 Completeness

实验得到有限 $\mathbf d$ 时，我们实际排除的是数据空间中的 $\mathbf d(\mathcal C)$。某条 Witness 不能区分两个具有相同数据的态，即使它们在完整状态空间中属于不同的资源集合。

因此，应当区分：

- 对固定 $\mathbf d$，一条 Witness 是否足以认证某个资源；
- 对给定测量方案，一组 Witness 是否完整刻画了 $\mathbf d(\mathcal C)$；
- 对完整态空间，是否存在原则上完备的 Witness 家族。

此外，**tight bound** 只说明不等式的界可以达到，不等于 detection complete。构造 Witness 时应把 bound 的证明、saturating strategy 与检测范围分别讨论。

### 4.5 从定性检测到定量认证

如果资源测度为 $R(\rho)$，而我们只知道实验数据 $\mathbf d$，则可考虑最坏情形 lower bound：

$$
\boxed{
R(\rho)\ge
\underline R(\mathbf d):=
\inf_{\sigma\in\mathcal D(\mathcal H),\ \mathbf d(\sigma)=\mathbf d}R(\sigma).
}
$$

当 $\underline R(\mathbf d)>0$，不仅认证资源存在，还给出了资源强度的定量保证。这一形式也清楚表明：**认证能力同时取决于资源定义、观测数据，以及所允许的模型假设。**

### 4.6 当前关注的研究问题

对于一个指定的量子态性质，我希望依次确认：

1. **Set：** 对应的受限资源集合究竟如何定义？
2. **Structure：** 集合具有什么几何或代数特征？
3. **Data：** 哪些实验量是真正可观测、且不需要完整 state tomography 的？
4. **Witness：** 如何从这些数据得到可靠的受限资源界？
5. **Power：** 这个 Witness 的 tightness、detection power 与 quantitative certification 到什么程度？

不同资源集合的包含关系、Witness 的间接认证，以及 Entanglement、Magic、Steering、Bell nonlocality 等性质之间的蕴含关系，将在后续部分单独整理。

```

